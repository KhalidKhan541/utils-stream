chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'createStream') { resp({items: msg.data, length: msg.data.length}); } });
