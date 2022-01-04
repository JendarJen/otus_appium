exports.config = {
    port: 4724,
    path: '/wd/hub/',
    runner: 'local',
    specs: ['./specs/*.js'],
    maxInstances: 1,
    capabilities: [

        // {
        //     // real device Android
        //     automationName: "UiAutomator2",
        //     platformName: "Android",
        //     platformVersion: "11",
        //     deviceName: "Pixel 5a",
        //     appPackage: 'com.csimobile',
        //     appActivity: "com.csimobile.MainActivity",
        // },

        {
            //emulator Android
            platformName: 'Android',
            platformVersion: '10',
            deviceName: "emulator-5554",
            app: './app-release (6).apk',
            automationName: 'UiAutomator2'
        }
        // {
        // ios real device
        //     automationName: "XCUITest",
        //     platformName: "iOS",
        //     platformVersion: "14.8",
        //     deviceName: "iPhone 11",
        //     udid: "00008030-000A543A3CD2802E",
        //     bundleId: 'com.csihelsinki.mobile',
        //     //app: "/Users/evgeniarud/csi-mobile/CsiMobile.ipa",
        //     xcodeOrgId: "U86YYF83SX",
        //     xcodeSigningId: "iPhone 11",
        //     updatedWDABundleId: "com.csihelsinki.mobile.WebDriverAgentRunner",
        //     noRest: "true",
        //     app: "/Users/evgeniarud/Library/Developer/Xcode/DerivedData/CsiMobile-crxzsldhqqzegtbgjenlcrffagia/Build/Products/Debug-iphoneos/CsiMobile.app",
        // },
        // {
        //     //emulator device iOS
        //     automationName: "XCUITest",
        //     platformName: "iOS",
        //     platformVersion: "15.0",
        //     deviceName: "iPhone 11",
        //     app: "/Users/evgeniarud/Library/Developer/Xcode/DerivedData/CsiMobile-crxzsldhqqzegtbgjenlcrffagia/Build/Products/Debug-iphonesimulator/CsiMobile.app",
        // }
    ],
    services: [
        [
            'appium',
            {
                args: {
                    relaxedSecurity: true
                },
                command: 'appium'
            }
        ]
    ],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    }
}