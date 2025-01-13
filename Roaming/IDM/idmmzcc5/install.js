

if ( (buildID < 2004011300) && (buildID > 0) )
{
	alert("Can not install IDM CC extension. This version of Mozilla does not supported.");
}
else
{
	initInstall("idmmzcc", "/informaction/idmmzcc", "7.3.70");

	var cf = getFolder("Chrome");
	addFile("/informaction/idmmzcc", "7.3.70", "chrome/idmmzcc.jar", cf, null);
	var jar = getFolder(cf, "idmmzcc.jar");
	registerChrome(CONTENT | DELAYED_CHROME, jar, "content/IDM/");

	var componentsDir = getFolder("Components");
	addFile("/informaction/idmmzcc", "7.3.70", "components/idmmzcc.dll", componentsDir, null);
	addFile("/informaction/idmmzcc", "7.3.70", "components/iIDMMzCC.xpt", componentsDir, null);

	performInstall();
}

