var expect = require('chai').expect

beforeEach(() => {
    driver.launchApp()
})

afterEach(() => {
    driver.closeApp()
})

describe('Checking the Main menu for task 2959', () => {
    it('The user can navigate the Main menu', async () => {

        let myButton = await $("~sign_in_button")
        await myButton.click()

        let api_organization = await $('~http://some.api_organization_card')
        await api_organization.click()

        let ok_button = await $('~ok_button')
        await ok_button.click()

        let dashboard_menu_tab = await $('~dashboard_menu_tab')
        await dashboard_menu_tab.click()
        // expect(dashboard_menu_tab).to.be(Dashboard)
        await browser.pause(10000)

        let entries_menu_tab = await $('~entries_menu_tab')
        await entries_menu_tab.click()
        await browser.pause(10000)

        let matters_menu_tab = await $('~matters_menu_tab')
        await matters_menu_tab.click()
        await browser.pause(10000)

        let invoicing_menu_tab = await $('~invoicing_menu_tab')
        await invoicing_menu_tab.click()
        await browser.pause(10000)

        let customers_menu_tab = await $('~customers_menu_tab')
        await customers_menu_tab.click()
        await browser.pause(10000)
    })
})