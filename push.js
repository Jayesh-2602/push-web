var push = require('web-push')

let vapidKEYS = {
    publicKey: 'BGs1lOQ6vRJbgTBDLG6IWTzS4Nt3x-afPCTQ7DfB3ur2B7KEEL24Zi5W6icTjj1BZ78tz6mw5wYxHrAnBoo-t4o',
    privateKey: 'MUpr8i6m0jA5kX0NbxiiAxjBh6Q5HWL2FS148asROq0'      
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKEYS.publicKey,vapidKEYS.privateKey)
  let sub = {};
  
  push.sendNotification(sub , 'test message')  