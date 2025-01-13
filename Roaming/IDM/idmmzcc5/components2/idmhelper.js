Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

function IDMCCHelperComponent() {
}
IDMCCHelperComponent.prototype = {
  classID: Components.ID("{2F1F0A65-80EA-45C4-859B-5A1EE43C370F}"),
  contractID:       "@idm/mozilla_cc_helper;1",   
  QueryInterface: XPCOMUtils.generateQI([Components.interfaces.iIDMHelper]),   
  GetSelectedDocPtr: function() 
  { 
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
			.getService(Components.interfaces.nsIWindowMediator);
	var recentWindow = wm.getMostRecentWindow("navigator:browser"); 
	return recentWindow ? recentWindow.content.document.QueryInterface(Components.interfaces.nsISupports) : null; 
  }, 
  GetBaseWindow: function(win) 
  { 
	return win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation).QueryInterface(Components.interfaces.nsIDocShellTreeItem).treeOwner.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIXULWindow).docShell.QueryInterface(Components.interfaces.nsIBaseWindow);
  },
  GetCharset: function(win) 
  { 
	return win.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIWebNavigation).QueryInterface(Components.interfaces.nsIDocShell).QueryInterface(Components.interfaces.nsIDocCharset); 
  }
};

const NSGetFactory = XPCOMUtils.generateNSGetFactory([IDMCCHelperComponent]);
