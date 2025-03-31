import os
import shutil
import logging
from pathlib import Path
from datetime import datetime

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    filename='syc.log',
    filemode='w'
)
logger = logging.getLogger(__name__)

# 跳过复制的目录列表
SKIP_DIRS = ['_gsdata_', 'logs', 'temp', "runtime"]

# 通过相对位置跳过的文件夹列表
SKIP_RELATIVE_PATHS = [
    'Local/Syncthing/_gsdata_',
    'Roaming/IDM/_gsdata_',
    'Roaming/IDM/DwnlData',
    'Local/Steam/htmlcache',
    'Local/Steam/cefdata',
    'Roaming/Adobe'
]


def get_appdata_path(folder_type):
    """根据文件夹类型获取系统AppData路径"""
    if folder_type == 'Local':
        return Path(os.getenv('LOCALAPPDATA'))
    elif folder_type == 'LocalLow':
        return Path(os.getenv('LOCALAPPDATA')).parent / 'LocalLow'
    elif folder_type == 'Roaming':
        return Path(os.getenv('APPDATA'))
    else:
        return None


def should_skip_relative_path(path, parent_path):
    """检查是否应该跳过相对路径"""
    # 获取相对于父目录的路径
    relative_path = str(path.relative_to(parent_path))

    # 将路径统一转换为正斜杠
    relative_path = relative_path.replace('\\', '/')

    # 检查是否在跳过列表中
    for skip_path in SKIP_RELATIVE_PATHS:
        # 只匹配完整的路径段
        if relative_path.startswith(skip_path.split('/')[-1]):
            return True
    return False


def find_and_copy_save_files():
    # 获取当前目录
    current_dir = Path.cwd()

    # 支持的目录类型
    supported_types = ['Local', 'LocalLow', 'Roaming']

    # 询问是否使用一键默认
    auto_mode = input("是否使用一键默认模式？(y/n): ").lower() == 'y'

    i = 0
    # 获取当前时间戳
    timestamp = datetime.now().strftime("%Y%m%d_%H.%M.%S")
    new_appdata_dir = current_dir / f"AppData_{timestamp}"

    # 遍历每个目录类型
    for folder_type in supported_types:
        # 检查当前目录下是否存在该类型目录
        source_dir = current_dir / folder_type
        if not source_dir.exists():
            logger.info(f"未找到{folder_type}目录，跳过")
            continue

        # 获取系统对应路径
        system_root = get_appdata_path(folder_type)

        # 遍历目录下的所有公司文件夹
        for company_dir in source_dir.iterdir():
            if company_dir.is_dir():
                # 检查是否在跳过列表中
                if company_dir.name in SKIP_DIRS:
                    logger.info(f"跳过目录: {folder_type}/{company_dir.name}")
                    continue

                # 构建系统对应路径
                system_save_path = system_root / company_dir.name

                # 检查系统存档目录是否存在
                if not system_save_path.exists():
                    logger.warning(f"未找到系统存档目录: {system_save_path}")
                    continue

                # 显示信息并询问用户（如果不是自动模式）
                print(f"\n找到存档目录: {system_save_path}")
                target_dir = new_appdata_dir / folder_type / company_dir.name
                print(f"目标目录: {target_dir}")

                if not auto_mode:
                    choice = input("是否复制该目录？(y/n): ").lower()
                else:
                    choice = 'y'

                if choice == 'y':
                    # 复制所有文件
                    i = i + 1
                    for save_file in system_save_path.rglob('*'):
                        # 检查文件路径是否在跳过列表中
                        if should_skip_relative_path(save_file, system_save_path):
                            logger.info(f"跳过文件: {save_file}")
                            continue

                        try:
                            relative_path = save_file.relative_to(system_save_path)
                            target_path = target_dir / relative_path
                            target_path.parent.mkdir(parents=True, exist_ok=True)
                            if save_file.is_file():
                                shutil.copy(save_file, target_path)
                                logger.info(f"已复制: {save_file.name}")
                        except Exception as e:
                            logger.error(f"复制失败: {save_file.name} - {str(e)}")
                else:
                    logger.info(f"用户选择跳过目录: {company_dir.name}")

    # 确保总文件夹数在最后输出
    logger.info(f"复制移动总文件夹数: {i}")
    print(f"\n复制移动总文件夹数: {i}")  # 同时在控制台输出


if __name__ == "__main__":
    find_and_copy_save_files()
    