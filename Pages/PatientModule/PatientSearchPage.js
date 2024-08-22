class PatientSearchPage {
    constructor(page) {
        this.page=page
        this.givenName = page.locator('xpath=//input[@id="Given Name"]')
        this.familyName = page.locator('xpath=//input[@id="Family Name"]')
        this.sex = page.locator('xpath=//div[@id="mui-component-select-sex"]')
        this.born = page.locator('xpath=//input[@id="Born"]')
        this.mobile = page.locator('xpath=//input[@id="Mobile"]')
        this.searchButton = page.locator('xpath=//button[@data-testid="Search"]')
        this.addPatientButton = page.locator('xpath=//button[@data-testid="Add Patient"]')
    }

    async enterGivenName(name) {
        await this.givenName.click()
        await this.givenName.fill(name)
    }

    async enterFamilyName(name) {
        await this.familyName.click()
        await this.familyName.fill(name)
    }

    async enterSex(sex) {
        await this.sex.click()
        //await this.page.locator('xpath=//div/ul/li[contains(text(),"'+sex+'")]').click() //finds locator based on sub tags
        if (sex == 'Male') {
            await this.page.getByRole('option', { name: sex, exact: true}).click()
        }
        else {
            await this.page.getByRole('option', { name: sex}).click()
        }
        //getByRole('option', { name: 'Male', exact: true })
    }

    async enterDateofBirth() { // Defaults to current date
        const date = new Date();
        await this.born.click()
        await this.born.fill(date.toLocaleDateString());
    }

    async enterMobile(mobile){
        await this.mobile.click()
        await this.mobile.fill(mobile)
    }

}
module.exports = PatientSearchPage