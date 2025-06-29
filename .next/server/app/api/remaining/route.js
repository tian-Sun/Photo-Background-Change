/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/remaining/route";
exports.ids = ["app/api/remaining/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/@supabase/realtime-js/dist/main sync recursive":
/*!************************************************************!*\
  !*** ./node_modules/@supabase/realtime-js/dist/main/ sync ***!
  \************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/@supabase/realtime-js/dist/main sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremaining%2Froute&page=%2Fapi%2Fremaining%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremaining%2Froute.ts&appDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremaining%2Froute&page=%2Fapi%2Fremaining%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremaining%2Froute.ts&appDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_project_WebTools_008_headshotGenerator_Photo_Background_Change_src_app_api_remaining_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/remaining/route.ts */ \"(rsc)/./src/app/api/remaining/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/remaining/route\",\n        pathname: \"/api/remaining\",\n        filename: \"route\",\n        bundlePath: \"app/api/remaining/route\"\n    },\n    resolvedPagePath: \"F:\\\\project\\\\WebTools\\\\008_headshotGenerator\\\\Photo-Background-Change\\\\src\\\\app\\\\api\\\\remaining\\\\route.ts\",\n    nextConfigOutput,\n    userland: F_project_WebTools_008_headshotGenerator_Photo_Background_Change_src_app_api_remaining_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZW1haW5pbmclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlbWFpbmluZyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlbWFpbmluZyUyRnJvdXRlLnRzJmFwcERpcj1GJTNBJTVDcHJvamVjdCU1Q1dlYlRvb2xzJTVDMDA4X2hlYWRzaG90R2VuZXJhdG9yJTVDUGhvdG8tQmFja2dyb3VuZC1DaGFuZ2UlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUYlM0ElNUNwcm9qZWN0JTVDV2ViVG9vbHMlNUMwMDhfaGVhZHNob3RHZW5lcmF0b3IlNUNQaG90by1CYWNrZ3JvdW5kLUNoYW5nZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUQ7QUFDdEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkY6XFxcXHByb2plY3RcXFxcV2ViVG9vbHNcXFxcMDA4X2hlYWRzaG90R2VuZXJhdG9yXFxcXFBob3RvLUJhY2tncm91bmQtQ2hhbmdlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJlbWFpbmluZ1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVtYWluaW5nL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVtYWluaW5nXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZW1haW5pbmcvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJGOlxcXFxwcm9qZWN0XFxcXFdlYlRvb2xzXFxcXDAwOF9oZWFkc2hvdEdlbmVyYXRvclxcXFxQaG90by1CYWNrZ3JvdW5kLUNoYW5nZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZW1haW5pbmdcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremaining%2Froute&page=%2Fapi%2Fremaining%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremaining%2Froute.ts&appDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/remaining/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/remaining/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n\n\n\nconst DAILY_USAGE_LIMIT = 1;\nfunction getTodayKey() {\n    return new Date().toISOString().split('T')[0];\n}\nfunction getTimeLeft() {\n    const now = new Date();\n    const tomorrow = new Date(now);\n    tomorrow.setDate(tomorrow.getDate() + 1);\n    tomorrow.setHours(0, 0, 0, 0);\n    const diff = tomorrow.getTime() - now.getTime();\n    const hours = Math.floor(diff / (1000 * 60 * 60));\n    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));\n    return {\n        hours,\n        minutes\n    };\n}\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        const userEmail = session.user.email;\n        const todayKey = getTodayKey();\n        // 检查用户是否有付费订阅\n        const subscription = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.getUserSubscription)(userEmail);\n        if (subscription && subscription.credits > 0) {\n            // 付费用户：返回剩余积分\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                remainingGenerations: subscription.credits,\n                isPaidUser: true,\n                planId: subscription.plan_id,\n                dailyLimit: subscription.credits\n            });\n        } else {\n            // 免费用户：使用每日限制\n            let userUsage = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.getUserUsage)(userEmail, todayKey);\n            if (!userUsage) {\n                userUsage = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.createUserUsage)(userEmail, todayKey);\n                if (!userUsage) {\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        error: 'Failed to create user usage record'\n                    }, {\n                        status: 500\n                    });\n                }\n            }\n            const remainingGenerations = Math.max(0, DAILY_USAGE_LIMIT - userUsage.usage_count);\n            const timeLeft = getTimeLeft();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                remainingGenerations,\n                isPaidUser: false,\n                hours: timeLeft.hours,\n                minutes: timeLeft.minutes,\n                dailyLimit: DAILY_USAGE_LIMIT\n            });\n        }\n    } catch (error) {\n        console.error('GET /api/remaining error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)();\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        const userEmail = session.user.email;\n        const todayKey = getTodayKey();\n        // 检查用户是否有付费订阅\n        const subscription = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.getUserSubscription)(userEmail);\n        if (subscription && subscription.credits > 0) {\n            // 付费用户：扣除积分\n            const newCredits = subscription.credits - 1;\n            // 更新数据库中的积分\n            const updateResult = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.updateUserSubscriptionCredits)(userEmail, newCredits);\n            if (!updateResult.success) {\n                console.error('Failed to update subscription credits:', updateResult.error);\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: 'Failed to update credits'\n                }, {\n                    status: 500\n                });\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: true,\n                remainingGenerations: newCredits,\n                isPaidUser: true\n            });\n        } else {\n            // 免费用户：使用每日限制\n            let userUsage = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.getUserUsage)(userEmail, todayKey);\n            if (!userUsage) {\n                userUsage = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.createUserUsage)(userEmail, todayKey);\n                if (!userUsage) {\n                    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                        error: 'Failed to create user usage record'\n                    }, {\n                        status: 500\n                    });\n                }\n            }\n            // 检查是否还有剩余次数\n            if (userUsage.usage_count >= DAILY_USAGE_LIMIT) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: 'Daily limit exceeded'\n                }, {\n                    status: 429\n                });\n            }\n            // 增加使用次数\n            const newCount = userUsage.usage_count + 1;\n            const success = await (0,_lib_supabase__WEBPACK_IMPORTED_MODULE_2__.updateUserUsage)(userEmail, todayKey, newCount);\n            if (!success) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    error: 'Failed to update usage count'\n                }, {\n                    status: 500\n                });\n            }\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: true,\n                remainingGenerations: Math.max(0, DAILY_USAGE_LIMIT - newCount),\n                isPaidUser: false\n            });\n        }\n    } catch (error) {\n        console.error('POST /api/remaining error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1NLFVBQVUsTUFBTTdDLDhEQUFlQSxDQUFDNEIsV0FBV0MsVUFBVWlCO1lBRTNELElBQUksQ0FBQ0QsU0FBUztnQkFDWixPQUFPakQscURBQVlBLENBQUM2QixJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQStCLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7WUFDcEY7WUFFQSxPQUFPL0IscURBQVlBLENBQUM2QixJQUFJLENBQUM7Z0JBQ3ZCb0IsU0FBUztnQkFDVGIsc0JBQXNCZixLQUFLcUIsR0FBRyxDQUFDLEdBQUduQyxvQkFBb0IyQztnQkFDdERiLFlBQVk7WUFDZDtRQUNGO0lBQ0YsRUFBRSxPQUFPUCxPQUFPO1FBQ2RlLFFBQVFmLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzVDLE9BQU85QixxREFBWUEsQ0FBQzZCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIkY6XFxwcm9qZWN0XFxXZWJUb29sc1xcMDA4X2hlYWRzaG90R2VuZXJhdG9yXFxQaG90by1CYWNrZ3JvdW5kLUNoYW5nZVxcc3JjXFxhcHBcXGFwaVxccmVtYWluaW5nXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xyXG5pbXBvcnQgeyBnZXRVc2VyVXNhZ2UsIGNyZWF0ZVVzZXJVc2FnZSwgdXBkYXRlVXNlclVzYWdlLCBnZXRVc2VyU3Vic2NyaXB0aW9uLCB1cGRhdGVVc2VyU3Vic2NyaXB0aW9uQ3JlZGl0cyB9IGZyb20gJ0AvbGliL3N1cGFiYXNlJztcclxuXHJcbmNvbnN0IERBSUxZX1VTQUdFX0xJTUlUID0gMTtcclxuXHJcbmZ1bmN0aW9uIGdldFRvZGF5S2V5KCk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lTGVmdCgpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUobm93KTtcclxuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xyXG4gIHRvbW9ycm93LnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gIGNvbnN0IGRpZmYgPSB0b21vcnJvdy5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xyXG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICByZXR1cm4geyBob3VycywgbWludXRlcyB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG4gICAgY29uc3QgdG9kYXlLZXkgPSBnZXRUb2RheUtleSgpO1xyXG4gICAgXHJcbiAgICAvLyDmo4Dmn6XnlKjmiLfmmK/lkKbmnInku5jotLnorqLpmIVcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IGdldFVzZXJTdWJzY3JpcHRpb24odXNlckVtYWlsKTtcclxuICAgIFxyXG4gICAgaWYgKHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24uY3JlZGl0cyA+IDApIHtcclxuICAgICAgLy8g5LuY6LS555So5oi377ya6L+U5Zue5Ymp5L2Z56ev5YiGXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgICAgcmVtYWluaW5nR2VuZXJhdGlvbnM6IHN1YnNjcmlwdGlvbi5jcmVkaXRzLFxyXG4gICAgICAgIGlzUGFpZFVzZXI6IHRydWUsXHJcbiAgICAgICAgcGxhbklkOiBzdWJzY3JpcHRpb24ucGxhbl9pZCxcclxuICAgICAgICBkYWlseUxpbWl0OiBzdWJzY3JpcHRpb24uY3JlZGl0cyxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlhY3otLnnlKjmiLfvvJrkvb/nlKjmr4/ml6XpmZDliLZcclxuICAgICAgbGV0IHVzZXJVc2FnZSA9IGF3YWl0IGdldFVzZXJVc2FnZSh1c2VyRW1haWwsIHRvZGF5S2V5KTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdXNlclVzYWdlKSB7XHJcbiAgICAgICAgdXNlclVzYWdlID0gYXdhaXQgY3JlYXRlVXNlclVzYWdlKHVzZXJFbWFpbCwgdG9kYXlLZXkpO1xyXG4gICAgICAgIGlmICghdXNlclVzYWdlKSB7XHJcbiAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgdXNlciB1c2FnZSByZWNvcmQnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZW1haW5pbmdHZW5lcmF0aW9ucyA9IE1hdGgubWF4KDAsIERBSUxZX1VTQUdFX0xJTUlUIC0gdXNlclVzYWdlLnVzYWdlX2NvdW50KTtcclxuICAgICAgY29uc3QgdGltZUxlZnQgPSBnZXRUaW1lTGVmdCgpO1xyXG5cclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICByZW1haW5pbmdHZW5lcmF0aW9ucyxcclxuICAgICAgICBpc1BhaWRVc2VyOiBmYWxzZSxcclxuICAgICAgICBob3VyczogdGltZUxlZnQuaG91cnMsXHJcbiAgICAgICAgbWludXRlczogdGltZUxlZnQubWludXRlcyxcclxuICAgICAgICBkYWlseUxpbWl0OiBEQUlMWV9VU0FHRV9MSU1JVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0dFVCAvYXBpL3JlbWFpbmluZyBlcnJvcjonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKCk7XHJcbiAgICBcclxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG4gICAgY29uc3QgdG9kYXlLZXkgPSBnZXRUb2RheUtleSgpO1xyXG4gICAgXHJcbiAgICAvLyDmo4Dmn6XnlKjmiLfmmK/lkKbmnInku5jotLnorqLpmIVcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IGdldFVzZXJTdWJzY3JpcHRpb24odXNlckVtYWlsKTtcclxuICAgIFxyXG4gICAgaWYgKHN1YnNjcmlwdGlvbiAmJiBzdWJzY3JpcHRpb24uY3JlZGl0cyA+IDApIHtcclxuICAgICAgLy8g5LuY6LS555So5oi377ya5omj6Zmk56ev5YiGXHJcbiAgICAgIGNvbnN0IG5ld0NyZWRpdHMgPSBzdWJzY3JpcHRpb24uY3JlZGl0cyAtIDE7XHJcbiAgICAgIFxyXG4gICAgICAvLyDmm7TmlrDmlbDmja7lupPkuK3nmoTnp6/liIZcclxuICAgICAgY29uc3QgdXBkYXRlUmVzdWx0ID0gYXdhaXQgdXBkYXRlVXNlclN1YnNjcmlwdGlvbkNyZWRpdHModXNlckVtYWlsLCBuZXdDcmVkaXRzKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdXBkYXRlUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHN1YnNjcmlwdGlvbiBjcmVkaXRzOicsIHVwZGF0ZVJlc3VsdC5lcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIGNyZWRpdHMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsIFxyXG4gICAgICAgIHJlbWFpbmluZ0dlbmVyYXRpb25zOiBuZXdDcmVkaXRzLFxyXG4gICAgICAgIGlzUGFpZFVzZXI6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDlhY3otLnnlKjmiLfvvJrkvb/nlKjmr4/ml6XpmZDliLZcclxuICAgICAgbGV0IHVzZXJVc2FnZSA9IGF3YWl0IGdldFVzZXJVc2FnZSh1c2VyRW1haWwsIHRvZGF5S2V5KTtcclxuICAgICAgXHJcbiAgICAgIGlmICghdXNlclVzYWdlKSB7XHJcbiAgICAgICAgdXNlclVzYWdlID0gYXdhaXQgY3JlYXRlVXNlclVzYWdlKHVzZXJFbWFpbCwgdG9kYXlLZXkpO1xyXG4gICAgICAgIGlmICghdXNlclVzYWdlKSB7XHJcbiAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgdXNlciB1c2FnZSByZWNvcmQnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDmo4Dmn6XmmK/lkKbov5jmnInliankvZnmrKHmlbBcclxuICAgICAgaWYgKHVzZXJVc2FnZS51c2FnZV9jb3VudCA+PSBEQUlMWV9VU0FHRV9MSU1JVCkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRGFpbHkgbGltaXQgZXhjZWVkZWQnIH0sIHsgc3RhdHVzOiA0MjkgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWinuWKoOS9v+eUqOasoeaVsFxyXG4gICAgICBjb25zdCBuZXdDb3VudCA9IHVzZXJVc2FnZS51c2FnZV9jb3VudCArIDE7XHJcbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCB1cGRhdGVVc2VyVXNhZ2UodXNlckVtYWlsLCB0b2RheUtleSwgbmV3Q291bnQpO1xyXG4gICAgICBcclxuICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdXBkYXRlIHVzYWdlIGNvdW50JyB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcclxuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcclxuICAgICAgICByZW1haW5pbmdHZW5lcmF0aW9uczogTWF0aC5tYXgoMCwgREFJTFlfVVNBR0VfTElNSVQgLSBuZXdDb3VudCksXHJcbiAgICAgICAgaXNQYWlkVXNlcjogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1BPU1QgL2FwaS9yZW1haW5pbmcgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiZ2V0VXNlclVzYWdlIiwiY3JlYXRlVXNlclVzYWdlIiwidXBkYXRlVXNlclVzYWdlIiwiZ2V0VXNlclN1YnNjcmlwdGlvbiIsInVwZGF0ZVVzZXJTdWJzY3JpcHRpb25DcmVkaXRzIiwiREFJTFlfVVNBR0VfTElNSVQiLCJnZXRUb2RheUtleSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZ2V0VGltZUxlZnQiLCJub3ciLCJ0b21vcnJvdyIsInNldERhdGUiLCJnZXREYXRlIiwic2V0SG91cnMiLCJkaWZmIiwiZ2V0VGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlckVtYWlsIiwidG9kYXlLZXkiLCJzdWJzY3JpcHRpb24iLCJjcmVkaXRzIiwicmVtYWluaW5nR2VuZXJhdGlvbnMiLCJpc1BhaWRVc2VyIiwicGxhbklkIiwicGxhbl9pZCIsImRhaWx5TGltaXQiLCJ1c2VyVXNhZ2UiLCJtYXgiLCJ1c2FnZV9jb3VudCIsInRpbWVMZWZ0IiwiY29uc29sZSIsIlBPU1QiLCJuZXdDcmVkaXRzIiwidXBkYXRlUmVzdWx0Iiwic3VjY2VzcyIsIm5ld0NvdW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/remaining/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase.ts":
/*!*****************************!*\
  !*** ./src/lib/supabase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOrUpdateUserSubscription: () => (/* binding */ createOrUpdateUserSubscription),\n/* harmony export */   createUserUsage: () => (/* binding */ createUserUsage),\n/* harmony export */   getUserSubscription: () => (/* binding */ getUserSubscription),\n/* harmony export */   getUserUsage: () => (/* binding */ getUserUsage),\n/* harmony export */   isSupabaseConfigured: () => (/* binding */ isSupabaseConfigured),\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   updateUserSubscriptionCredits: () => (/* binding */ updateUserSubscriptionCredits),\n/* harmony export */   updateUserUsage: () => (/* binding */ updateUserUsage)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://nzgbyvdifeijoeerdhwq.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56Z2J5dmRpZmVpam9lZXJkaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODA0NDcsImV4cCI6MjA2NjI1NjQ0N30.CXL5af0J2l049V1X0Bvj2NujPRIBv6wXfYdLG467xms\";\n// 检查 Supabase 是否配置\nconst isSupabaseConfigured = supabaseUrl && supabaseAnonKey;\nconst supabase = isSupabaseConfigured ? (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey) : null;\n// 内存存储回退（当 Supabase 未配置时使用）\nconst memoryStorage = {};\n// 获取或创建用户使用记录\nasync function getUserUsage(userEmail, date) {\n    if (!isSupabaseConfigured) {\n        // 使用内存存储\n        const key = `${userEmail}_${date}`;\n        if (!memoryStorage[key] || memoryStorage[key].date !== date) {\n            memoryStorage[key] = {\n                count: 0,\n                date\n            };\n        }\n        return {\n            user_email: userEmail,\n            usage_count: memoryStorage[key].count,\n            usage_date: date\n        };\n    }\n    const { data, error } = await supabase.from('user_usage').select('*').eq('user_email', userEmail).eq('usage_date', date).single();\n    if (error && error.code !== 'PGRST116') {\n        console.error('Error fetching user usage:', error);\n        return null;\n    }\n    return data;\n}\n// 创建用户使用记录\nasync function createUserUsage(userEmail, date) {\n    if (!isSupabaseConfigured) {\n        // 使用内存存储\n        const key = `${userEmail}_${date}`;\n        memoryStorage[key] = {\n            count: 0,\n            date\n        };\n        return {\n            user_email: userEmail,\n            usage_count: 0,\n            usage_date: date\n        };\n    }\n    const { data, error } = await supabase.from('user_usage').insert([\n        {\n            user_email: userEmail,\n            usage_count: 0,\n            usage_date: date\n        }\n    ]).select().single();\n    if (error) {\n        console.error('Error creating user usage:', error);\n        return null;\n    }\n    return data;\n}\n// 更新用户使用次数\nasync function updateUserUsage(userEmail, date, newCount) {\n    if (!isSupabaseConfigured) {\n        // 使用内存存储\n        const key = `${userEmail}_${date}`;\n        if (memoryStorage[key]) {\n            memoryStorage[key].count = newCount;\n        }\n        return true;\n    }\n    const { error } = await supabase.from('user_usage').update({\n        usage_count: newCount,\n        updated_at: new Date().toISOString()\n    }).eq('user_email', userEmail).eq('usage_date', date);\n    if (error) {\n        console.error('Error updating user usage:', error);\n        return false;\n    }\n    return true;\n}\n// 获取用户订阅信息\nasync function getUserSubscription(userEmail) {\n    if (!isSupabaseConfigured) {\n        // 开发环境默认给Premium订阅\n        return {\n            user_email: userEmail,\n            plan_id: 'premium',\n            credits: 100,\n            status: 'active'\n        };\n    }\n    const { data, error } = await supabase.from('user_subscriptions').select('*').eq('user_email', userEmail).eq('status', 'active').single();\n    if (error && error.code !== 'PGRST116') {\n        console.error('Error fetching user subscription:', error);\n        return null;\n    }\n    return data;\n}\n// 创建或更新用户订阅\nasync function createOrUpdateUserSubscription(params) {\n    const { email, planId, credits, orderId } = params;\n    if (!isSupabaseConfigured) {\n        console.log('✅ Supabase not configured, subscription created in memory');\n        return {\n            success: true\n        };\n    }\n    try {\n        // 首先检查是否已有活跃订阅\n        const existingSubscription = await getUserSubscription(email);\n        if (existingSubscription) {\n            // 更新现有订阅的积分\n            const { error } = await supabase.from('user_subscriptions').update({\n                credits: existingSubscription.credits + credits,\n                updated_at: new Date().toISOString()\n            }).eq('user_email', email).eq('status', 'active');\n            if (error) {\n                console.error('Error updating subscription:', error);\n                return {\n                    success: false,\n                    error: error.message\n                };\n            }\n        } else {\n            // 创建新订阅\n            const { error } = await supabase.from('user_subscriptions').insert([\n                {\n                    user_email: email,\n                    plan_id: planId,\n                    credits: credits,\n                    status: 'active',\n                    order_id: orderId\n                }\n            ]);\n            if (error) {\n                console.error('Error creating subscription:', error);\n                return {\n                    success: false,\n                    error: error.message\n                };\n            }\n        }\n        return {\n            success: true\n        };\n    } catch (error) {\n        console.error('Unexpected error in createOrUpdateUserSubscription:', error);\n        return {\n            success: false,\n            error: 'Unexpected error occurred'\n        };\n    }\n}\n// 更新用户订阅积分\nasync function updateUserSubscriptionCredits(userEmail, newCredits) {\n    if (!isSupabaseConfigured) {\n        console.log('✅ Supabase not configured, credits updated in memory');\n        return {\n            success: true\n        };\n    }\n    try {\n        const { error } = await supabase.from('user_subscriptions').update({\n            credits: newCredits,\n            updated_at: new Date().toISOString()\n        }).eq('user_email', userEmail).eq('status', 'active');\n        if (error) {\n            console.error('Error updating subscription credits:', error);\n            return {\n                success: false,\n                error: error.message\n            };\n        }\n        return {\n            success: true\n        };\n    } catch (error) {\n        console.error('Unexpected error in updateUserSubscriptionCredits:', error);\n        return {\n            success: false,\n            error: 'Unexpected error occurred'\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU96QixPQUFPO1FBQ2RNLFFBQVFOLEtBQUssQ0FBQyxzREFBc0RBO1FBQ3BFLE9BQU87WUFBRXlCLFNBQVM7WUFBT3pCLE9BQU87UUFBNEI7SUFDOUQ7QUFDRiIsInNvdXJjZXMiOlsiRjpcXHByb2plY3RcXFdlYlRvb2xzXFwwMDhfaGVhZHNob3RHZW5lcmF0b3JcXFBob3RvLUJhY2tncm91bmQtQ2hhbmdlXFxzcmNcXGxpYlxcc3VwYWJhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTtcclxuXHJcbi8vIOajgOafpSBTdXBhYmFzZSDmmK/lkKbphY3nva5cclxuZXhwb3J0IGNvbnN0IGlzU3VwYWJhc2VDb25maWd1cmVkID0gc3VwYWJhc2VVcmwgJiYgc3VwYWJhc2VBbm9uS2V5O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gaXNTdXBhYmFzZUNvbmZpZ3VyZWQgXHJcbiAgPyBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwhLCBzdXBhYmFzZUFub25LZXkhKVxyXG4gIDogbnVsbDtcclxuXHJcbi8vIOWGheWtmOWtmOWCqOWbnumAgO+8iOW9kyBTdXBhYmFzZSDmnKrphY3nva7ml7bkvb/nlKjvvIlcclxuY29uc3QgbWVtb3J5U3RvcmFnZTogUmVjb3JkPHN0cmluZywgeyBjb3VudDogbnVtYmVyOyBkYXRlOiBzdHJpbmcgfT4gPSB7fTtcclxuXHJcbi8vIOaVsOaNruW6k+ihqOaOpeWPo1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJVc2FnZSB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgdXNlcl9lbWFpbDogc3RyaW5nO1xyXG4gIHVzYWdlX2NvdW50OiBudW1iZXI7XHJcbiAgdXNhZ2VfZGF0ZTogc3RyaW5nO1xyXG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XHJcbiAgdXBkYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3Vic2NyaXB0aW9uIHtcclxuICBpZD86IG51bWJlcjtcclxuICB1c2VyX2VtYWlsOiBzdHJpbmc7XHJcbiAgcGxhbl9pZDogc3RyaW5nO1xyXG4gIGNyZWRpdHM6IG51bWJlcjtcclxuICBzdGF0dXM6ICdhY3RpdmUnIHwgJ2V4cGlyZWQnIHwgJ2NhbmNlbGxlZCc7XHJcbiAgb3JkZXJfaWQ/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxuICB1cGRhdGVkX2F0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vLyDojrflj5bmiJbliJvlu7rnlKjmiLfkvb/nlKjorrDlvZVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJVc2FnZSh1c2VyRW1haWw6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyVXNhZ2UgfCBudWxsPiB7XHJcbiAgaWYgKCFpc1N1cGFiYXNlQ29uZmlndXJlZCkge1xyXG4gICAgLy8g5L2/55So5YaF5a2Y5a2Y5YKoXHJcbiAgICBjb25zdCBrZXkgPSBgJHt1c2VyRW1haWx9XyR7ZGF0ZX1gO1xyXG4gICAgaWYgKCFtZW1vcnlTdG9yYWdlW2tleV0gfHwgbWVtb3J5U3RvcmFnZVtrZXldLmRhdGUgIT09IGRhdGUpIHtcclxuICAgICAgbWVtb3J5U3RvcmFnZVtrZXldID0geyBjb3VudDogMCwgZGF0ZSB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcl9lbWFpbDogdXNlckVtYWlsLFxyXG4gICAgICB1c2FnZV9jb3VudDogbWVtb3J5U3RvcmFnZVtrZXldLmNvdW50LFxyXG4gICAgICB1c2FnZV9kYXRlOiBkYXRlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlIVxyXG4gICAgLmZyb20oJ3VzZXJfdXNhZ2UnKVxyXG4gICAgLnNlbGVjdCgnKicpXHJcbiAgICAuZXEoJ3VzZXJfZW1haWwnLCB1c2VyRW1haWwpXHJcbiAgICAuZXEoJ3VzYWdlX2RhdGUnLCBkYXRlKVxyXG4gICAgLnNpbmdsZSgpO1xyXG5cclxuICBpZiAoZXJyb3IgJiYgZXJyb3IuY29kZSAhPT0gJ1BHUlNUMTE2JykgeyAvLyBQR1JTVDExNiA9IG5vIHJvd3MgZm91bmRcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgdXNhZ2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8g5Yib5bu655So5oi35L2/55So6K6w5b2VXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyVXNhZ2UodXNlckVtYWlsOiBzdHJpbmcsIGRhdGU6IHN0cmluZyk6IFByb21pc2U8VXNlclVzYWdlIHwgbnVsbD4ge1xyXG4gIGlmICghaXNTdXBhYmFzZUNvbmZpZ3VyZWQpIHtcclxuICAgIC8vIOS9v+eUqOWGheWtmOWtmOWCqFxyXG4gICAgY29uc3Qga2V5ID0gYCR7dXNlckVtYWlsfV8ke2RhdGV9YDtcclxuICAgIG1lbW9yeVN0b3JhZ2Vba2V5XSA9IHsgY291bnQ6IDAsIGRhdGUgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXJfZW1haWw6IHVzZXJFbWFpbCxcclxuICAgICAgdXNhZ2VfY291bnQ6IDAsXHJcbiAgICAgIHVzYWdlX2RhdGU6IGRhdGUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UhXHJcbiAgICAuZnJvbSgndXNlcl91c2FnZScpXHJcbiAgICAuaW5zZXJ0KFtcclxuICAgICAge1xyXG4gICAgICAgIHVzZXJfZW1haWw6IHVzZXJFbWFpbCxcclxuICAgICAgICB1c2FnZV9jb3VudDogMCxcclxuICAgICAgICB1c2FnZV9kYXRlOiBkYXRlLFxyXG4gICAgICB9XHJcbiAgICBdKVxyXG4gICAgLnNlbGVjdCgpXHJcbiAgICAuc2luZ2xlKCk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgdXNlciB1c2FnZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vLyDmm7TmlrDnlKjmiLfkvb/nlKjmrKHmlbBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJVc2FnZSh1c2VyRW1haWw6IHN0cmluZywgZGF0ZTogc3RyaW5nLCBuZXdDb3VudDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgaWYgKCFpc1N1cGFiYXNlQ29uZmlndXJlZCkge1xyXG4gICAgLy8g5L2/55So5YaF5a2Y5a2Y5YKoXHJcbiAgICBjb25zdCBrZXkgPSBgJHt1c2VyRW1haWx9XyR7ZGF0ZX1gO1xyXG4gICAgaWYgKG1lbW9yeVN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICBtZW1vcnlTdG9yYWdlW2tleV0uY291bnQgPSBuZXdDb3VudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UhXHJcbiAgICAuZnJvbSgndXNlcl91c2FnZScpXHJcbiAgICAudXBkYXRlKHsgdXNhZ2VfY291bnQ6IG5ld0NvdW50LCB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcclxuICAgIC5lcSgndXNlcl9lbWFpbCcsIHVzZXJFbWFpbClcclxuICAgIC5lcSgndXNhZ2VfZGF0ZScsIGRhdGUpO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHVzZXIgdXNhZ2U6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIOiOt+WPlueUqOaIt+iuoumYheS/oeaBr1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclN1YnNjcmlwdGlvbih1c2VyRW1haWw6IHN0cmluZyk6IFByb21pc2U8VXNlclN1YnNjcmlwdGlvbiB8IG51bGw+IHtcclxuICBpZiAoIWlzU3VwYWJhc2VDb25maWd1cmVkKSB7XHJcbiAgICAvLyDlvIDlj5Hnjq/looPpu5jorqTnu5lQcmVtaXVt6K6i6ZiFXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyX2VtYWlsOiB1c2VyRW1haWwsXHJcbiAgICAgIHBsYW5faWQ6ICdwcmVtaXVtJyxcclxuICAgICAgY3JlZGl0czogMTAwLFxyXG4gICAgICBzdGF0dXM6ICdhY3RpdmUnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UhXHJcbiAgICAuZnJvbSgndXNlcl9zdWJzY3JpcHRpb25zJylcclxuICAgIC5zZWxlY3QoJyonKVxyXG4gICAgLmVxKCd1c2VyX2VtYWlsJywgdXNlckVtYWlsKVxyXG4gICAgLmVxKCdzdGF0dXMnLCAnYWN0aXZlJylcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgaWYgKGVycm9yICYmIGVycm9yLmNvZGUgIT09ICdQR1JTVDExNicpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXIgc3Vic2NyaXB0aW9uOicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vIOWIm+W7uuaIluabtOaWsOeUqOaIt+iuoumYhVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVVc2VyU3Vic2NyaXB0aW9uKHBhcmFtczoge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGxhbklkOiBzdHJpbmc7XHJcbiAgY3JlZGl0czogbnVtYmVyO1xyXG4gIG9yZGVySWQ/OiBzdHJpbmc7XHJcbn0pOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBsYW5JZCwgY3JlZGl0cywgb3JkZXJJZCB9ID0gcGFyYW1zO1xyXG5cclxuICBpZiAoIWlzU3VwYWJhc2VDb25maWd1cmVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygn4pyFIFN1cGFiYXNlIG5vdCBjb25maWd1cmVkLCBzdWJzY3JpcHRpb24gY3JlYXRlZCBpbiBtZW1vcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICAvLyDpppblhYjmo4Dmn6XmmK/lkKblt7LmnInmtLvot4PorqLpmIVcclxuICAgIGNvbnN0IGV4aXN0aW5nU3Vic2NyaXB0aW9uID0gYXdhaXQgZ2V0VXNlclN1YnNjcmlwdGlvbihlbWFpbCk7XHJcbiAgICBcclxuICAgIGlmIChleGlzdGluZ1N1YnNjcmlwdGlvbikge1xyXG4gICAgICAvLyDmm7TmlrDnjrDmnInorqLpmIXnmoTnp6/liIZcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UhXHJcbiAgICAgICAgLmZyb20oJ3VzZXJfc3Vic2NyaXB0aW9ucycpXHJcbiAgICAgICAgLnVwZGF0ZSh7XHJcbiAgICAgICAgICBjcmVkaXRzOiBleGlzdGluZ1N1YnNjcmlwdGlvbi5jcmVkaXRzICsgY3JlZGl0cyxcclxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmVxKCd1c2VyX2VtYWlsJywgZW1haWwpXHJcbiAgICAgICAgLmVxKCdzdGF0dXMnLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzdWJzY3JpcHRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDliJvlu7rmlrDorqLpmIVcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UhXHJcbiAgICAgICAgLmZyb20oJ3VzZXJfc3Vic2NyaXB0aW9ucycpXHJcbiAgICAgICAgLmluc2VydChbe1xyXG4gICAgICAgICAgdXNlcl9lbWFpbDogZW1haWwsXHJcbiAgICAgICAgICBwbGFuX2lkOiBwbGFuSWQsXHJcbiAgICAgICAgICBjcmVkaXRzOiBjcmVkaXRzLFxyXG4gICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcclxuICAgICAgICAgIG9yZGVyX2lkOiBvcmRlcklkXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3Vic2NyaXB0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBpbiBjcmVhdGVPclVwZGF0ZVVzZXJTdWJzY3JpcHRpb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCcgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOabtOaWsOeUqOaIt+iuoumYheenr+WIhlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlclN1YnNjcmlwdGlvbkNyZWRpdHMoXHJcbiAgdXNlckVtYWlsOiBzdHJpbmcsIFxyXG4gIG5ld0NyZWRpdHM6IG51bWJlclxyXG4pOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xyXG4gIGlmICghaXNTdXBhYmFzZUNvbmZpZ3VyZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCfinIUgU3VwYWJhc2Ugbm90IGNvbmZpZ3VyZWQsIGNyZWRpdHMgdXBkYXRlZCBpbiBtZW1vcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZSFcclxuICAgICAgLmZyb20oJ3VzZXJfc3Vic2NyaXB0aW9ucycpXHJcbiAgICAgIC51cGRhdGUoe1xyXG4gICAgICAgIGNyZWRpdHM6IG5ld0NyZWRpdHMsXHJcbiAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5lcSgndXNlcl9lbWFpbCcsIHVzZXJFbWFpbClcclxuICAgICAgLmVxKCdzdGF0dXMnLCAnYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHN1YnNjcmlwdGlvbiBjcmVkaXRzOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGluIHVwZGF0ZVVzZXJTdWJzY3JpcHRpb25DcmVkaXRzOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1VuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnIH07XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImlzU3VwYWJhc2VDb25maWd1cmVkIiwic3VwYWJhc2UiLCJtZW1vcnlTdG9yYWdlIiwiZ2V0VXNlclVzYWdlIiwidXNlckVtYWlsIiwiZGF0ZSIsImtleSIsImNvdW50IiwidXNlcl9lbWFpbCIsInVzYWdlX2NvdW50IiwidXNhZ2VfZGF0ZSIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsImNvZGUiLCJjb25zb2xlIiwiY3JlYXRlVXNlclVzYWdlIiwiaW5zZXJ0IiwidXBkYXRlVXNlclVzYWdlIiwibmV3Q291bnQiLCJ1cGRhdGUiLCJ1cGRhdGVkX2F0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZ2V0VXNlclN1YnNjcmlwdGlvbiIsInBsYW5faWQiLCJjcmVkaXRzIiwic3RhdHVzIiwiY3JlYXRlT3JVcGRhdGVVc2VyU3Vic2NyaXB0aW9uIiwicGFyYW1zIiwiZW1haWwiLCJwbGFuSWQiLCJvcmRlcklkIiwibG9nIiwic3VjY2VzcyIsImV4aXN0aW5nU3Vic2NyaXB0aW9uIiwibWVzc2FnZSIsIm9yZGVyX2lkIiwidXBkYXRlVXNlclN1YnNjcmlwdGlvbkNyZWRpdHMiLCJuZXdDcmVkaXRzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "?32c4":
/*!****************************!*\
  !*** bufferutil (ignored) ***!
  \****************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?66e9":
/*!********************************!*\
  !*** utf-8-validate (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@supabase","vendor-chunks/ws","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fremaining%2Froute&page=%2Fapi%2Fremaining%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fremaining%2Froute.ts&appDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5Cproject%5CWebTools%5C008_headshotGenerator%5CPhoto-Background-Change&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();