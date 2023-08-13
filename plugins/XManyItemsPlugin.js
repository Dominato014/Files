/// Andrew Pratt 2022
"use strict";
var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, r) {
        e[r = void 0 === r ? n : r] = t[n]
    }),
    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    e = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return i(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
});
const a = e(require("fs")),
    o = e(require("path"));
e(require("child_process"));
require("console");
const s = e(require("@peacockproject/core/loggingInterop"));

function l(e) {
    s.log(s.LogLevel.ERROR, "[ManyItemsPlugin] ERROR: " + e)
}

function u(e) {
    return e.configManager.configs.allunlockables
}

function d(e, t) {
    if (t.hasLoadedBefore) {
        if (!(e.Guid in t.normalQuantities)) return n = `Failed to retrieve normal state for item ${e.Id} with Guid ${e.Guid}. Guessing values, item might be incorrect!`, s.log(s.LogLevel.WARN, "[ManyItemsPlugin] WARNING:" + n), delete e.Properties.GameAssets, void delete e.Properties.RepositoryAssets;
        var n, t = t.normalQuantities[e.Guid];
        e.Properties.GameAssets = t.first, e.Properties.RepositoryAssets = t.last
    }
}

function c(e, t, n) {
    for (var r of e) "" !== (i = r).Type && "gear" !== i.Type || (t.enabled && !n.pluginEnabledOnLastLoad && (i = r, n.normalQuantities[i.Guid] = {
        first: i.Properties.GameAssets,
        last: i.Properties.RepositoryAssets
    }), t.enabled ? function(t, n) {
        n <= 0 && s.log(s.LogLevel.ERROR, "Cannot set an item item's quantity to " + n);
        var r = null != t.Properties.GameAssets && 1 <= t.Properties.GameAssets.length ? t.Properties.GameAssets[0] : t.Id,
            i = t.Properties.RepositoryId;
        t.Properties.GameAssets = new Array, t.Properties.RepositoryAssets = new Array;
        for (let e = 0; e < n; e++) t.Properties.GameAssets.push(r), t.Properties.RepositoryAssets.push(i)
    }(r, t.replaceAmount) : d(r, n));
    var i
}

function f() {
    var e, t = o.join(".", "ManyItemsInternal.dat");
    let n;
    if (a.existsSync(t)) try {
        n = (e = a.readFileSync(t, {
            encoding: "utf8"
        }), null == (e = JSON.parse(e)).pluginEnabledOnLastLoad || null == e.normalQuantities || null == e.hasLoadedBefore ? null : {
            pluginEnabledOnLastLoad: e.pluginEnabledOnLastLoad,
            normalQuantities: e.normalQuantities,
            hasLoadedBefore: e.hasLoadedBefore
        })
    } catch (e) {
        return l(`[ManyItemsPlugin] ERROR: An error occurred while reading internal data: ${e}
   File located at: ` + t), null
    } else n = {
        pluginEnabledOnLastLoad: !1,
        normalQuantities: {},
        hasLoadedBefore: !1
    }, a.writeFileSync(t, JSON.stringify(n));
    return n
}

function p(e) {
    var t = o.join(".", "ManyItemsInternal.dat");
    try {
        a.writeFileSync(t, JSON.stringify(e))
    } catch (e) {
        l(`[ManyItemsPlugin] ERROR: An error occurred while writing internal data: ${e}
   File located at: ` + t)
    }
}
module.exports = function(t) {
    s.log(s.LogLevel.INFO, "Loaded ManyItemsPlugin");
    var n, r = o.join(".", "ManyItemsConfig.json");
    if (a.existsSync(r)) {
        let e;
        try {
            e = (n = a.readFileSync(r, {
                encoding: "utf8"
            }), null == (n = JSON.parse(n)).enabled || null == n.replaceAmount ? null : {
                enabled: n.enabled,
                replaceAmount: n.replaceAmount
            })
        } catch (e) {
            return void l(`[ManyItemsPlugin] ERROR: An error occurred while reading config file: ${e}
   Config file located at: ` + r)
        }(e.enabled ? function(e, t) {
            let n = f();
            null != n && (c(u(e), t, n), n.pluginEnabledOnLastLoad = !0, n.hasLoadedBefore = !0, p(n), s.log(s.LogLevel.DEBUG, "[ManyItemsPlugin] Enabled"))
        } : function(e, t) {
            let n = f();
            null != n && (c(u(e), t, n), n.pluginEnabledOnLastLoad = !1, p(n), s.log(s.LogLevel.DEBUG, "[ManyItemsPlugin] Disabled"))
        })(t, e)
    } else l("[ManyItemsPlugin] ERROR: Missing config file! Expected: " + r)
};