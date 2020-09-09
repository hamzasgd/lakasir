    var Ziggy = {
        namedRoutes: {"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"paket.api.repositories.collect":{"uri":"paket\/api\/repositories","methods":["GET","HEAD"],"domain":null},"paket.api.requirements.collect":{"uri":"paket\/api\/requirements","methods":["GET","HEAD"],"domain":null},"paket.api.jobs.collect":{"uri":"paket\/api\/jobs","methods":["GET","HEAD"],"domain":null},"paket.api.jobs.post":{"uri":"paket\/api\/jobs","methods":["POST"],"domain":null},"paket.api.jobs.get":{"uri":"paket\/api\/jobs\/{job}","methods":["GET","HEAD"],"domain":null},"paket.api.jobs.delete":{"uri":"paket\/api\/jobs\/{job}","methods":["DELETE"],"domain":null},"paket":{"uri":"paket\/{view?}","methods":["GET","HEAD"],"domain":null},"dusk.login":{"uri":"_dusk\/login\/{userId}\/{guard?}","methods":["GET","HEAD"],"domain":null},"dusk.logout":{"uri":"_dusk\/logout\/{guard?}","methods":["GET","HEAD"],"domain":null},"dusk.user":{"uri":"_dusk\/user\/{guard?}","methods":["GET","HEAD"],"domain":null},"horizon.stats.index":{"uri":"horizon\/api\/stats","methods":["GET","HEAD"],"domain":null},"horizon.workload.index":{"uri":"horizon\/api\/workload","methods":["GET","HEAD"],"domain":null},"horizon.masters.index":{"uri":"horizon\/api\/masters","methods":["GET","HEAD"],"domain":null},"horizon.monitoring.index":{"uri":"horizon\/api\/monitoring","methods":["GET","HEAD"],"domain":null},"horizon.monitoring.store":{"uri":"horizon\/api\/monitoring","methods":["POST"],"domain":null},"horizon.monitoring-tag.paginate":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["GET","HEAD"],"domain":null},"horizon.monitoring-tag.destroy":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["DELETE"],"domain":null},"horizon.jobs-metrics.index":{"uri":"horizon\/api\/metrics\/jobs","methods":["GET","HEAD"],"domain":null},"horizon.jobs-metrics.show":{"uri":"horizon\/api\/metrics\/jobs\/{id}","methods":["GET","HEAD"],"domain":null},"horizon.queues-metrics.index":{"uri":"horizon\/api\/metrics\/queues","methods":["GET","HEAD"],"domain":null},"horizon.queues-metrics.show":{"uri":"horizon\/api\/metrics\/queues\/{id}","methods":["GET","HEAD"],"domain":null},"horizon.pending-jobs.index":{"uri":"horizon\/api\/jobs\/pending","methods":["GET","HEAD"],"domain":null},"horizon.completed-jobs.index":{"uri":"horizon\/api\/jobs\/completed","methods":["GET","HEAD"],"domain":null},"horizon.failed-jobs.index":{"uri":"horizon\/api\/jobs\/failed","methods":["GET","HEAD"],"domain":null},"horizon.failed-jobs.show":{"uri":"horizon\/api\/jobs\/failed\/{id}","methods":["GET","HEAD"],"domain":null},"horizon.retry-jobs.show":{"uri":"horizon\/api\/jobs\/retry\/{id}","methods":["POST"],"domain":null},"horizon.jobs.show":{"uri":"horizon\/api\/jobs\/{id}","methods":["GET","HEAD"],"domain":null},"horizon.index":{"uri":"horizon\/{view?}","methods":["GET","HEAD"],"domain":null},"passport.authorizations.authorize":{"uri":"oauth\/authorize","methods":["GET","HEAD"],"domain":null},"passport.authorizations.approve":{"uri":"oauth\/authorize","methods":["POST"],"domain":null},"passport.authorizations.deny":{"uri":"oauth\/authorize","methods":["DELETE"],"domain":null},"passport.token":{"uri":"oauth\/token","methods":["POST"],"domain":null},"passport.tokens.index":{"uri":"oauth\/tokens","methods":["GET","HEAD"],"domain":null},"passport.tokens.destroy":{"uri":"oauth\/tokens\/{token_id}","methods":["DELETE"],"domain":null},"passport.token.refresh":{"uri":"oauth\/token\/refresh","methods":["POST"],"domain":null},"passport.clients.index":{"uri":"oauth\/clients","methods":["GET","HEAD"],"domain":null},"passport.clients.store":{"uri":"oauth\/clients","methods":["POST"],"domain":null},"passport.clients.update":{"uri":"oauth\/clients\/{client_id}","methods":["PUT"],"domain":null},"passport.clients.destroy":{"uri":"oauth\/clients\/{client_id}","methods":["DELETE"],"domain":null},"passport.scopes.index":{"uri":"oauth\/scopes","methods":["GET","HEAD"],"domain":null},"passport.personal.tokens.index":{"uri":"oauth\/personal-access-tokens","methods":["GET","HEAD"],"domain":null},"passport.personal.tokens.store":{"uri":"oauth\/personal-access-tokens","methods":["POST"],"domain":null},"passport.personal.tokens.destroy":{"uri":"oauth\/personal-access-tokens\/{token_id}","methods":["DELETE"],"domain":null},"api.item.show":{"uri":"api\/item\/{id}","methods":["GET","HEAD"],"domain":null},"api.auth.login":{"uri":"api\/v1\/auth\/login","methods":["POST"],"domain":null},"api.auth.profile":{"uri":"api\/v1\/auth\/profile","methods":["GET","HEAD"],"domain":null},"api.selling.index":{"uri":"api\/v1\/selling","methods":["GET","HEAD"],"domain":null},"api.selling.create":{"uri":"api\/v1\/selling\/create","methods":["GET","HEAD"],"domain":null},"api.selling.store":{"uri":"api\/v1\/selling","methods":["POST"],"domain":null},"api.selling.show":{"uri":"api\/v1\/selling\/{selling}","methods":["GET","HEAD"],"domain":null},"api.selling.edit":{"uri":"api\/v1\/selling\/{selling}\/edit","methods":["GET","HEAD"],"domain":null},"api.selling.update":{"uri":"api\/v1\/selling\/{selling}","methods":["PUT","PATCH"],"domain":null},"api.selling.destroy":{"uri":"api\/v1\/selling\/{selling}","methods":["DELETE"],"domain":null},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"],"domain":null},"payment_method.index":{"uri":"master\/payment_method","methods":["GET","HEAD"],"domain":null},"payment_method.create":{"uri":"master\/payment_method\/create","methods":["GET","HEAD"],"domain":null},"payment_method.store":{"uri":"master\/payment_method","methods":["POST"],"domain":null},"payment_method.show":{"uri":"master\/payment_method\/{payment_method}","methods":["GET","HEAD"],"domain":null},"payment_method.edit":{"uri":"master\/payment_method\/{payment_method}\/edit","methods":["GET","HEAD"],"domain":null},"payment_method.update":{"uri":"master\/payment_method\/{payment_method}","methods":["PUT","PATCH"],"domain":null},"payment_method.destroy":{"uri":"master\/payment_method\/{payment_method}","methods":["DELETE"],"domain":null},"unit.index":{"uri":"master\/unit","methods":["GET","HEAD"],"domain":null},"unit.create":{"uri":"master\/unit\/create","methods":["GET","HEAD"],"domain":null},"unit.store":{"uri":"master\/unit","methods":["POST"],"domain":null},"unit.show":{"uri":"master\/unit\/{unit}","methods":["GET","HEAD"],"domain":null},"unit.edit":{"uri":"master\/unit\/{unit}\/edit","methods":["GET","HEAD"],"domain":null},"unit.update":{"uri":"master\/unit\/{unit}","methods":["PUT","PATCH"],"domain":null},"unit.destroy":{"uri":"master\/unit\/{unit}","methods":["DELETE"],"domain":null},"category.index":{"uri":"master\/category","methods":["GET","HEAD"],"domain":null},"category.create":{"uri":"master\/category\/create","methods":["GET","HEAD"],"domain":null},"category.store":{"uri":"master\/category","methods":["POST"],"domain":null},"category.show":{"uri":"master\/category\/{category}","methods":["GET","HEAD"],"domain":null},"category.edit":{"uri":"master\/category\/{category}\/edit","methods":["GET","HEAD"],"domain":null},"category.update":{"uri":"master\/category\/{category}","methods":["PUT","PATCH"],"domain":null},"category.destroy":{"uri":"master\/category\/{category}","methods":["DELETE"],"domain":null},"item.download-template":{"uri":"master\/item\/download-template","methods":["GET","HEAD"],"domain":null},"item.import":{"uri":"master\/item\/import","methods":["POST"],"domain":null},"item.index":{"uri":"master\/item","methods":["GET","HEAD"],"domain":null},"item.create":{"uri":"master\/item\/create","methods":["GET","HEAD"],"domain":null},"item.store":{"uri":"master\/item","methods":["POST"],"domain":null},"item.show":{"uri":"master\/item\/{item}","methods":["GET","HEAD"],"domain":null},"item.edit":{"uri":"master\/item\/{item}\/edit","methods":["GET","HEAD"],"domain":null},"item.update":{"uri":"master\/item\/{item}","methods":["PUT","PATCH"],"domain":null},"item.destroy":{"uri":"master\/item\/{item}","methods":["DELETE"],"domain":null},"supplier.download-template":{"uri":"master\/supplier\/download-template","methods":["GET","HEAD"],"domain":null},"supplier.import":{"uri":"master\/supplier\/import","methods":["POST"],"domain":null},"supplier.index":{"uri":"master\/supplier","methods":["GET","HEAD"],"domain":null},"supplier.create":{"uri":"master\/supplier\/create","methods":["GET","HEAD"],"domain":null},"supplier.store":{"uri":"master\/supplier","methods":["POST"],"domain":null},"supplier.show":{"uri":"master\/supplier\/{supplier}","methods":["GET","HEAD"],"domain":null},"supplier.edit":{"uri":"master\/supplier\/{supplier}\/edit","methods":["GET","HEAD"],"domain":null},"supplier.update":{"uri":"master\/supplier\/{supplier}","methods":["PUT","PATCH"],"domain":null},"supplier.destroy":{"uri":"master\/supplier\/{supplier}","methods":["DELETE"],"domain":null},"group.index":{"uri":"master\/group","methods":["GET","HEAD"],"domain":null},"group.create":{"uri":"master\/group\/create","methods":["GET","HEAD"],"domain":null},"group.store":{"uri":"master\/group","methods":["POST"],"domain":null},"group.show":{"uri":"master\/group\/{group}","methods":["GET","HEAD"],"domain":null},"group.edit":{"uri":"master\/group\/{group}\/edit","methods":["GET","HEAD"],"domain":null},"group.update":{"uri":"master\/group\/{group}","methods":["PUT","PATCH"],"domain":null},"group.destroy":{"uri":"master\/group\/{group}","methods":["DELETE"],"domain":null},"customer.index":{"uri":"master\/customer","methods":["GET","HEAD"],"domain":null},"customer.create":{"uri":"master\/customer\/create","methods":["GET","HEAD"],"domain":null},"customer.store":{"uri":"master\/customer","methods":["POST"],"domain":null},"customer.show":{"uri":"master\/customer\/{customer}","methods":["GET","HEAD"],"domain":null},"customer.edit":{"uri":"master\/customer\/{customer}\/edit","methods":["GET","HEAD"],"domain":null},"customer.update":{"uri":"master\/customer\/{customer}","methods":["PUT","PATCH"],"domain":null},"customer.destroy":{"uri":"master\/customer\/{customer}","methods":["DELETE"],"domain":null},"customer-point.store":{"uri":"master\/customer-point","methods":["POST"],"domain":null},"profile.index":{"uri":"user\/profile","methods":["GET","HEAD"],"domain":null},"profile.store":{"uri":"user\/profile","methods":["POST"],"domain":null},"change_password.index":{"uri":"user\/change_password","methods":["GET","HEAD"],"domain":null},"change_password.store":{"uri":"user\/change_password","methods":["POST"],"domain":null},"role.index":{"uri":"user\/role","methods":["GET","HEAD"],"domain":null},"role.create":{"uri":"user\/role\/create","methods":["GET","HEAD"],"domain":null},"role.store":{"uri":"user\/role","methods":["POST"],"domain":null},"role.show":{"uri":"user\/role\/{role}","methods":["GET","HEAD"],"domain":null},"role.edit":{"uri":"user\/role\/{role}\/edit","methods":["GET","HEAD"],"domain":null},"role.update":{"uri":"user\/role\/{role}","methods":["PUT","PATCH"],"domain":null},"role.destroy":{"uri":"user\/role\/{role}","methods":["DELETE"],"domain":null},"user.index":{"uri":"user","methods":["GET","HEAD"],"domain":null},"user.create":{"uri":"user\/create","methods":["GET","HEAD"],"domain":null},"user.store":{"uri":"user","methods":["POST"],"domain":null},"user.show":{"uri":"user\/{user}","methods":["GET","HEAD"],"domain":null},"user.edit":{"uri":"user\/{user}\/edit","methods":["GET","HEAD"],"domain":null},"user.update":{"uri":"user\/{user}","methods":["PUT","PATCH"],"domain":null},"user.destroy":{"uri":"user\/{user}","methods":["DELETE"],"domain":null},"purchasing.detail.edit":{"uri":"transaction\/purchasing\/{purchasing}\/detail\/{purchasing-detail}\/edit","methods":["GET","HEAD"],"domain":null},"purchasing.index":{"uri":"transaction\/purchasing","methods":["GET","HEAD"],"domain":null},"purchasing.create":{"uri":"transaction\/purchasing\/create","methods":["GET","HEAD"],"domain":null},"purchasing.store":{"uri":"transaction\/purchasing","methods":["POST"],"domain":null},"purchasing.show":{"uri":"transaction\/purchasing\/{purchasing}","methods":["GET","HEAD"],"domain":null},"purchasing.edit":{"uri":"transaction\/purchasing\/{purchasing}\/edit","methods":["GET","HEAD"],"domain":null},"purchasing.update":{"uri":"transaction\/purchasing\/{purchasing}","methods":["PUT","PATCH"],"domain":null},"purchasing.destroy":{"uri":"transaction\/purchasing\/{purchasing}","methods":["DELETE"],"domain":null},"selling.index":{"uri":"transaction\/selling","methods":["GET","HEAD"],"domain":null},"selling.create":{"uri":"transaction\/selling\/create","methods":["GET","HEAD"],"domain":null},"selling.store":{"uri":"transaction\/selling","methods":["POST"],"domain":null},"selling.show":{"uri":"transaction\/selling\/{selling}","methods":["GET","HEAD"],"domain":null},"selling.edit":{"uri":"transaction\/selling\/{selling}\/edit","methods":["GET","HEAD"],"domain":null},"selling.update":{"uri":"transaction\/selling\/{selling}","methods":["PUT","PATCH"],"domain":null},"selling.destroy":{"uri":"transaction\/selling\/{selling}","methods":["DELETE"],"domain":null},"cashdrawer.open":{"uri":"cashdrawer\/open","methods":["POST"],"domain":null},"cashdrawer.close":{"uri":"cashdrawer\/close","methods":["POST"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"],"domain":null},"install.index":{"uri":"install","methods":["GET","HEAD"],"domain":null},"install.databaseStore":{"uri":"install\/databaseStore","methods":["POST"],"domain":null},"install.userStore":{"uri":"install\/userStore","methods":["POST"],"domain":null},"install.companyStore":{"uri":"install\/companyStore","methods":["POST"],"domain":null},"install.store":{"uri":"install","methods":["POST"],"domain":null}},
        baseUrl: 'http://lakasir.deb/',
        baseProtocol: 'http',
        baseDomain: 'lakasir.deb',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
