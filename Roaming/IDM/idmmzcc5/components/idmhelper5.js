
const CLASS_ID = Components.ID("{D099C555-A0B1-4294-94F4-455F42060B1E}");
const CLASS_NAME = "IDM CC Component";
const CONTRACT_ID = "@idm/mozilla_cc_helper5;1";


function IDMCCHelperComponent5() {
};

IDMCCHelperComponent5.prototype = {
  QueryInterface: function(aIID)
  {
    if (!aIID.equals(Components.interfaces.iIDMHelper5) &&    
        !aIID.equals(Components.interfaces.nsISupports))
      throw Components.results.NS_ERROR_NO_INTERFACE;
    return this;
  },
  GetHref: function(pNode) 
  { 
	var v_anchor = pNode.QueryInterface(Components.interfaces.nsIDOMNode).QueryInterface(Components.interfaces.nsIDOMHTMLAnchorElement);
	if (! v_anchor)
		return null;
	return (v_anchor.href);
  },
  GetLText: function(pNode) 
  { 
	var v_anchor = pNode.QueryInterface(Components.interfaces.nsIDOMNode).QueryInterface(Components.interfaces.nsIDOMHTMLAnchorElement);
	if (! v_anchor)
		return null;
	return (v_anchor.firstChild.nodeValue);
  },
  GetSpec: function(pURI)
  {
	var v_uri = pURI.QueryInterface(Components.interfaces.nsIURI);
	if (! v_uri)
		return null;
	return (v_uri.spec);
  },
  GetUsername: function(pURI)
  {
	var v_uri = pURI.QueryInterface(Components.interfaces.nsIURI);
	if (! v_uri)
		return null;
	if (v_uri.username)
		retutn (v_uri.username);
	return null;
  },
  GetPassword: function(pURI)
  {
	var v_uri = pURI.QueryInterface(Components.interfaces.nsIURI);
	if (! v_uri)
		return null;
	if (v_uri.password)
		retutn (v_uri.password);
	return null;
  },
  GetObjType: function(pNode)
  {
	try
	{
	var v_obj = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLObjectElement);
	if (v_obj)
		return 1;
	}
	catch(e) {}
	try
	{
	var v_obj2 = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLEmbedElement);
	if (v_obj2)
		return 2;
	}
	catch(e) {}
	try
	{
	var v_obj3 = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLVideoElement);
	if (v_obj3)
		return 3;
	}
	catch(e) {}
	try
	{
	var v_obj4 = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLAudioElement);
	if (v_obj4)
		return 4;
	}
	catch(e) {}
	return 0;
  },
  GetOwnerDoc: function(pNode)
  {
	try
	{
		return (pNode.QueryInterface(Components.interfaces.nsIDOMNode).ownerDocument.QueryInterface(Components.interfaces.nsISupports));
	} catch (e) { }
	return null;
  },
  GetTitle: function(pDoc)
  {
	var v_doc = pDoc.QueryInterface(Components.interfaces.nsIDOMHTMLDocument);
	if (! v_doc)
		return null;
	return (v_doc.title);
  },
  GetURL: function(pDoc)
  {
	try
	{
	var v_doc = pDoc.QueryInterface(Components.interfaces.nsIDOMHTMLDocument);
	if (! v_doc)
		return null;
	return (v_doc.URL);
	} catch (e) { }
	return null;
  },
  GetBW1: function(win) 
  { 
	return win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation).QueryInterface(Components.interfaces.nsIDocShell).QueryInterface(Components.interfaces.nsISupports);
  },
  GetBW2: function(win) 
  { 
	return win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation).QueryInterface(Components.interfaces.nsIDocShellTreeItem).treeOwner.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIXULWindow).docShell.QueryInterface(Components.interfaces.nsISupports); 
  },
  GetTopWin: function(win)
  {
	var v_tw = win.QueryInterface(Components.interfaces.nsIDOMWindow).top.QueryInterface(Components.interfaces.nsIDOMWindow);
	return v_tw.QueryInterface(Components.interfaces.nsISupports);
  },
  GetDefaultView: function(doc)
  {
	var v_dv = doc.QueryInterface(Components.interfaces.nsIDOMDocument).defaultView;
	if (v_dv)
		return v_dv.QueryInterface(Components.interfaces.nsISupports);
	return null;
  },
  GetCharset: function(win) 
  { 
	return win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation).QueryInterface(Components.interfaces.nsIDocShell).QueryInterface(Components.interfaces.nsIDocCharset).charset; 
  },
  GetEvType: function(pEvent)
  {
	var v_event = pEvent.QueryInterface(Components.interfaces.nsIDOMEvent);
	if (! v_event)
		return null;
	return (v_event.type); 
  },
  GetEvTargetDoc: function(pEvent)
  {
	var v_doc = pEvent.QueryInterface(Components.interfaces.nsIDOMEvent).target.QueryInterface(Components.interfaces.nsIDOMNode).ownerDocument;
	if (! v_doc)
		return null;
	return v_doc.QueryInterface(Components.interfaces.nsISupports);
  },
  AddEventListener: function(type, pTarget, pListener, useCapture)
  {
	var v_target = pTarget.QueryInterface(Components.interfaces.nsIDOMEventTarget);
	if (! v_target)
		return;
	var v_listener = pListener.QueryInterface(Components.interfaces.nsIDOMEventListener);
	if (! v_listener)
		return;
	v_target.addEventListener(type, v_listener, useCapture);
  },
  CheckHtmlDoc: function(pDoc)
  {
	try
	{
	var v_doc = pDoc.QueryInterface(Components.interfaces.nsIDOMHTMLDocument);
	if (! v_doc)
		return false;
	} catch(e) { return false; }
	return true;
  },
  GetFramesCollectionLen: function(pColl)
  {
	return pColl.QueryInterface(Components.interfaces.nsIArray).length;
  },
  GetFramesCollection: function(pWin)
  {
	var v_frames = pWin.QueryInterface(Components.interfaces.nsIDOMWindow).frames;
	if (! v_frames)
		return null;
	if (! v_frames.length)
		return null;
	var array = Components.classes["@mozilla.org/array;1"].createInstance(Components.interfaces.nsIMutableArray);
	for (var i = 0; i < v_frames.length; i++)
		array.appendElement(v_frames[i], false);
	return  array.QueryInterface(Components.interfaces.nsISupports);
  },
  GetFramesCollItem: function(pColl, index)
  {
	return pColl.QueryInterface(Components.interfaces.nsIArray).queryElementAt(index, Components.interfaces.nsISupports); 
  },
  GetWinEnumerator: function()
  {
	return Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator).getEnumerator("navigator:browser").QueryInterface(Components.interfaces.nsISimpleEnumerator).QueryInterface(Components.interfaces.nsISupports);
  },
  HasMoreWin: function(pEnum)
  {
	var v_enum = pEnum.QueryInterface(Components.interfaces.nsISimpleEnumerator);
	if (! v_enum)
		return false;
	if (v_enum.hasMoreElements())
		return true;
	return false;
  },
  GetNextWin: function(pEnum)
  {
	var v_enum = pEnum.QueryInterface(Components.interfaces.nsISimpleEnumerator);
	if (! v_enum)
		return null;
	return v_enum.getNext();
  },
  GetDocument: function(pWin)
  {
	try
	{
		var v_win = pWin.QueryInterface(Components.interfaces.nsIDOMWindow);
		if (! v_win)
			return null;
		return v_win.document.QueryInterface(Components.interfaces.nsISupports); 
	}
	catch(e) { }
	return null;
  },
  GetDocument2: function(pIR)
  {
	return pIR.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMDocument).QueryInterface(Components.interfaces.nsISupports); 
  },
  GetScrollX: function(pWin)
  {
	return 0;
  },
  GetScrollY: function(pWin)
  {
	return 0;
  },
  GetTagsListLen: function(pList)
  {
	return pList.QueryInterface(Components.interfaces.nsIDOMNodeList).length;
  },
  GetTagsListItem: function(pList, index)
  {
	var v_list = pList.QueryInterface(Components.interfaces.nsIDOMNodeList);
	if (! v_list)
		return null;
	return v_list[index].QueryInterface(Components.interfaces.nsISupports);
  },
  GetTagsList: function(pDoc, sTag)
  {
	var v_list = pDoc.QueryInterface(Components.interfaces.nsIDOMDocument).getElementsByTagName(sTag);
	if (! v_list)
		return null;
	if (! v_list.length)
		return null;
	var array = Components.classes["@mozilla.org/array;1"].createInstance(Components.interfaces.nsIMutableArray);
	for (var i = 0; i < v_list.length; i++)
		array.appendElement(v_list[i], false);
	return  array.QueryInterface(Components.interfaces.nsISupports);
  },
  GetIFrameContentDocument: function(pIFrame)
  {
	return pIFrame.QueryInterface(Components.interfaces.nsIDOMHTMLIFrameElement).contentDocument.QueryInterface(Components.interfaces.nsISupports);
  },
  GetFrameContentDocument: function(pFrame)
  {
	return pFrame.QueryInterface(Components.interfaces.nsIDOMHTMLFrameElement).contentDocument.QueryInterface(Components.interfaces.nsISupports);
  },
  GetOffsetTop: function(pNode)
  {
	try
	{
	var v_elem = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLElement);
	if (! v_elem)
		return 0;
	var rect = v_elem.getBoundingClientRect();
	return rect.top;
	}
	catch(e) { }
	return 0;
  },
  GetOffsetLeft: function(pNode)
  {
	try
	{
	var v_elem = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLElement);
	if (! v_elem)
		return 0;
	var rect = v_elem.getBoundingClientRect();
	return rect.left;
	}
	catch(e) { }
	return 0;
  },
  GetWidth: function(pNode)
  {
	try
	{
	var v_elem = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLElement);
	if (! v_elem)
		return 0;
	return v_elem.offsetWidth;
	}
	catch(e) { }
	return 0;
  },
  GetHeight: function(pNode)
  {
	try
	{
	var v_elem = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLElement);
	if (! v_elem)
		return 0;
	return v_elem.offsetHeight;
	}
	catch(e) { }
	return 0;
  },
  GetBox: function(pDoc, elementId)
  {
	return pDoc.QueryInterface(Components.interfaces.nsIDOMDocument).getElementById(elementId).boxObject.QueryInterface(Components.interfaces.nsISupports);
  },
  GetBoxX: function(pBox)
  {
	return pBox.QueryInterface(Components.interfaces.nsIBoxObject).x;
  },
  GetBoxY: function(pBox)
  {
	return pBox.QueryInterface(Components.interfaces.nsIBoxObject).y;
  },
  GetBoxHeight: function(pBox)
  {
	return pBox.QueryInterface(Components.interfaces.nsIBoxObject).height;
  },
  GetBoxWidth: function(pBox)
  {
	return pBox.QueryInterface(Components.interfaces.nsIBoxObject).width;
  },
  GetInnerHTML: function(pNode)
  {
	var v_elem = pNode.QueryInterface(Components.interfaces.nsIDOMHTMLElement);
	if (! v_elem)
		return "";
	return v_elem.innerHTML;
  },
  GetScript: function(pNode)
  {
	var v_script = pNode.QueryInterface(Components.interfaces.nsIDOMNode).QueryInterface(Components.interfaces.nsIDOMHTMLScriptElement);
	if (! v_script)
		return "";
	return (v_script.text);
  },
  GetLinks: function(pDoc)
  {
	var v_links = pDoc.QueryInterface(Components.interfaces.nsIDOMHTMLDocument).links;
	if (! v_links)
		return null;
	if (! v_links.length)
		return null;
	var array = Components.classes["@mozilla.org/array;1"].createInstance(Components.interfaces.nsIMutableArray);
	for (var i = 0; i < v_links.length; i++)
		array.appendElement(v_links[i], false);
	return  array.QueryInterface(Components.interfaces.nsISupports);
  },
  GetDocElement: function(pDoc)
  {
	return pDoc.QueryInterface(Components.interfaces.nsIDOMHTMLDocument).documentElement;
  },
  GetNotifictions: function(pChan)
  {
	try
	{
		return pChan.QueryInterface(Components.interfaces.nsIChannel).notificationCallbacks.QueryInterface(Components.interfaces.nsISupports); 
	}
	catch(e) { }
	return null;
  },
  GetOrSpec: function(pChan)
  {
	var v_orig = pChan.QueryInterface(Components.interfaces.nsIChannel).originalURI;
	if (! v_orig)
		return "";
	return (v_orig.spec);
  },
  GetRefSpec: function(pChan)
  {
	var v_ref = pChan.QueryInterface(Components.interfaces.nsIHttpChannel).referrer;
	if (! v_ref)
		return "";
	return (v_ref.spec);
  },
  GetNodeAttr: function(pNode, name)
  {
	var v_nitem = pNode.QueryInterface(Components.interfaces.nsIDOMNode).attributes.getNamedItem(name);
	if (! v_nitem)
		return "";
	return v_nitem.nodeValue;
  },
  GetSelection: function(pWin)
  {
	var p_sel = pWin.QueryInterface(Components.interfaces.nsIDOMWindow).getSelection();
	if (! p_sel)
		return null;
	return p_sel.QueryInterface(Components.interfaces.nsISupports);
  },
  GetSelIsCollapsed: function(pSel)
  {
       return pSel.QueryInterface(Components.interfaces.nsISelection).isCollapsed;
  },
  SelContainsNode: function(pSel, pNode)
  {
	var v_node = pNode.QueryInterface(Components.interfaces.nsIDOMNode);
	if (! v_node)
		return false; 
	return pSel.QueryInterface(Components.interfaces.nsISelection).containsNode(v_node, true);
  },
  SelToString: function(pSel)
  {
	return pSel.QueryInterface(Components.interfaces.nsISelection).toString();
  },
  GetParentNode: function(pNode)
  {
	var v_pnode = pNode.QueryInterface(Components.interfaces.nsIDOMNode).parentNode;
	if (! v_pnode)
		return null;
	return v_pnode.QueryInterface(Components.interfaces.nsISupports);
  },
  GetFirstChildNodeValue: function(pNode)
  {
	var v_child = pNode.QueryInterface(Components.interfaces.nsIDOMNode).firstChild;
	if (! v_child)
		return "";
	return v_child.nodeValue;
  },
  GetRequestMethod: function(pChan)
  {
	return pChan.QueryInterface(Components.interfaces.nsIHttpChannel).requestMethod;
  },
  GetRequestHeader: function(pChan, aHeader)
  {
	try
	{
	var res = pChan.QueryInterface(Components.interfaces.nsIHttpChannel).getRequestHeader(aHeader);
	if (res)
		return res;
	} catch (e) { }
	return "";
  },
  GetURI: function(pChan)
  {
	return pChan.QueryInterface(Components.interfaces.nsIChannel).URI.QueryInterface(Components.interfaces.nsISupports);
  },
  GetLGChannel: function(pReq)
  {
	try
	{
	return pReq.QueryInterface(Components.interfaces.nsIRequest).loadGroup.defaultLoadRequest.QueryInterface(Components.interfaces.nsIChannel).QueryInterface(Components.interfaces.nsISupports);
	} catch (e) { }
	return null;
  },
  CancelRequest: function(pReq, aStatus)
  {
	pReq.QueryInterface(Components.interfaces.nsIRequest).cancel(aStatus);
  },
  GetResponseStatus: function(pChan)
  {
	return pChan.QueryInterface(Components.interfaces.nsIHttpChannel).responseStatus;
  },
  GetResponseHeader: function(pChan, header)
  {
	var res = pChan.QueryInterface(Components.interfaces.nsIHttpChannel).getResponseHeader(header);
	if (res)
		return res;
	return "";
  },
  SetResponseHeader: function(pChan, header, value)
  {
	pChan.QueryInterface(Components.interfaces.nsIHttpChannel).setResponseHeader(header, value, false);
  },
  VisitResponseHeaders: function(pChan, aVisitor)
  {
	var v_visitor = aVisitor.QueryInterface(Components.interfaces.nsIHttpHeaderVisitor);
	if (! v_visitor)
		return;
	pChan.QueryInterface(Components.interfaces.nsIHttpChannel).visitResponseHeaders(v_visitor);
  },
  GetEventTarget: function(pEvent)
  {
	return pEvent.QueryInterface(Components.interfaces.nsIDOMEvent).target.QueryInterface(Components.interfaces.nsISupports);
  },
  RemoveEventListener: function(type, pTarget, listener, useCapture)
  {
	var v_target = pTarget.QueryInterface(Components.interfaces.nsIDOMEventTarget);
	if (! v_target)
		return;
	var v_listener = listener.QueryInterface(Components.interfaces.nsIDOMEventListener);
	if (! v_listener)
		return;
	v_target.removeEventListener(type, v_listener, useCapture);
  },
  _dsWnd: null,
  _dsWndListener: null,
  _dsWndEvTarget: null,
  SetDsWnd: function(pWin, pListener)
  {
	_dsWnd = pWin.QueryInterface(Components.interfaces.nsIDOMWindow);
	_dsWndEvTarget = _dsWnd.QueryInterface(Components.interfaces.nsIDOMEventTarget);
	_dsWndListener = pListener.QueryInterface(Components.interfaces.nsIDOMEventListener); 
  },
  GetEventTarget2: function(pWin)
  {
	return pWin.QueryInterface(Components.interfaces.nsIDOMWindow).QueryInterface(Components.interfaces.nsIDOMEventTarget).QueryInterface(Components.interfaces.nsISupports);
  },
  AddEventListener2: function(type, useCapture)
  {
	if (! _dsWnd)
		return;
	if (! _dsWndListener)
		return;
	_dsWnd.addEventListener(type, _dsWndListener, useCapture);
  },
  RemoveEventListener2: function(type, useCapture)
  {
	if (! _dsWnd)
		return;
	if (! _dsWndListener)
		return;
	_dsWnd.removeEventListener(type, _dsWndListener, useCapture);
  },
  GetLocalFile: function(key)
  {
	var cacheService = Components.classes["@mozilla.org/network/cache-service;1"].getService(Components.interfaces.nsICacheService);
	var httpCacheSession =  cacheService.createSession("HTTP", 0, true);
	var cacheEntry = httpCacheSession.openCacheEntry(key, Components.interfaces.nsICache.ACCESS_READ, false);
	if (! cacheEntry)
		return "";
	var file =  cacheEntry.file;
	var res = "";
	cacheEntry.close();
	if (! file)
		return "";
	return file.path;
  }
};



var IDMCCHelperComponentOldFactory = {
  createInstance: function (aOuter, aIID)
  {
    if (aOuter != null)
      throw Components.results.NS_ERROR_NO_AGGREGATION;
    return (new IDMCCHelperComponent5()).QueryInterface(aIID);
  }
};

var IDMCCHelperComponentOldModule = {
  registerSelf: function(aCompMgr, aFileSpec, aLocation, aType)
  {
    aCompMgr = aCompMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
    aCompMgr.registerFactoryLocation(CLASS_ID, CLASS_NAME, CONTRACT_ID, aFileSpec, aLocation, aType);
  },

  unregisterSelf: function(aCompMgr, aLocation, aType)
  {
    aCompMgr = aCompMgr.QueryInterface(Components.interfaces.nsIComponentRegistrar);
    aCompMgr.unregisterFactoryLocation(CLASS_ID, aLocation);        
  },
  
  getClassObject: function(aCompMgr, aCID, aIID)
  {
    if (!aIID.equals(Components.interfaces.nsIFactory))
      throw Components.results.NS_ERROR_NOT_IMPLEMENTED;

    if (aCID.equals(CLASS_ID))
      return IDMCCHelperComponentOldFactory;

    throw Components.results.NS_ERROR_NO_INTERFACE;
  },

  canUnload: function(aCompMgr) { return true; }
};



function NSGetModule(aCompMgr, aFileSpec) { return IDMCCHelperComponentOldModule; }

function NSGetFactory(cid) {
  if (! CLASS_ID.equals(cid)) throw Components.results.NS_ERROR_FACTORY_NOT_REGISTERED;
  return IDMCCHelperComponentOldFactory;
}