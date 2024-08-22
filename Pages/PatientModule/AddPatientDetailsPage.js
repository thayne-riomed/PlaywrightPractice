class AddPatientDetailsPage {
    constructor(page) {
        this.page=page
        this.dropdownTitle = page.locator('xpath=//div[@id="mui-component-select-patTitle"]')
        //getByRole('option', { name: 'Dr' }) //div/ul/li[contains(text(), "Dr")]
        this.patientNameDiffLang = page.locator('xpath=//input[@id="Pt name in other language"]')
        this.dropdownMaritalStatus = page.locator('xpath=//div[@id="mui-component-select-patMaritalStatus"]') //page.getByTestId('Marital Status').getByLabel('', { exact: true })
        //getByRole('option', { name: 'Single' }) //div/ul/li[contains(text(), "Single")]
        this.dropdownSexualOrientation = page.locator('xpath=//div[@id="mui-component-select-patSexualOrientationEliId"]') //getByTestId('Sexual Orientation').getByLabel('', { exact: true })
        this.dropdownEthnicity = page.locator('xpath=//div[@id="mui-component-select-patEthnicityText"]')
        //div/ul/li[contains(text(), "British")]
        this.dropdownOccupation = page.locator('xpath=//div[@id="mui-component-select-patOccupation"]')
        //div/ul/li[contains(text(), "Trainer")]
        this.dropdownReligion = page.locator('xpath=//div[@id="mui-component-select-patReligion"]') //Hindu
        this.townOfBirth = page.locator('xpath=//input[@id="Town Of Birth"]')
        this.countyOfBirth = page.locator('xpath=//input[@id="County Of Birth"]')
        this.dropdownCountryOfBirth = page.locator('xpath=//div[@id="mui-component-select-patCountryOfBirth"]') //India
        this.dropdownNationality = page.locator('xpath=//div[@id="mui-component-select-patNationality"]') //Indian
        this.dropdownRegDisabled = page.locator('xpath=//div[@id="mui-component-select-patRegisteredDisabled"]') //No
        this.dropdownPrimaryDisablility = page.locator('xpath=//div[@id="mui-component-select-primaryDisability"]') //No
        this.assistanceNeeded = page.locator('xpath=//input[@id="Assistance Needed"]')
        this.disabilityNote = page.locator('xpath=//input[@id="Disability Note"]')
        this.dropdownLanguage = page.locator('xpath=//div[@id="mui-component-select-patLanguage"]') //Hindi
        this.dropdownInterpreterNeeded = page.locator('xpath=//div[@id="mui-component-select-patNeedInterpreterAtAppointments"]') //Yes
        this.dropdownInterpreterType = page.locator('xpath=//div[@id="mui-component-select-patInterpreterTypeEliId"]') //Whisper
        this.hospitalRef = page.locator('xpath=//input[@id="Hospital Ref"]')
        this.pasId = page.locator('xpath=//input[@id="PAS ID"]')
        this.dropdownPatientType = page.locator('xpath=//div[@id="mui-component-select-patType"]') //Camp
        this.dropdownPrisoner = page.locator('xpath=//div[@id="mui-component-select-patPrisoner"]') //No
        this.dropdownBloodType = page.locator('xpath=//div[@id="mui-component-select-patBloodGroup"]') //AB+
        this.dropdownRestrictedRegistration = page.locator('xpath=//div[@id="mui-component-select-patBanned"]') //No
        this.dropdownPatientWebAccess = page.locator('xpath=//div[@id="mui-component-select-patRegisteredWithPatientweb"]') //No
        this.notes = page.locator('xpath=//textarea[@id="Notes"]')
        this.nextButton = page.locator('xpath=//button[@data-testid="Next"]')
    }

    async selectTitle(title){
        await this.dropdownTitle.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+title+'")]').click()
    }

    async enterPatientNameDiffLang(name){
        await this.patientNameDiffLang.click()
        await this.patientNameDiffLang.fill(name)
    }

    async selectDropdownMaritalStatus(status){
        await this.dropdownMaritalStatus.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+status+'")]').click()
    }

    async selectDropdownSexualOrientation(orientation){
        await this.dropdownSexualOrientation.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+orientation+'")]').click()
    }

    async selectDropdownEthnicity(ethnicity){
        await this.dropdownEthnicity.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+ethnicity+'")]').click()
    }

    async selectDropdownOccupation(occupation){
        await this.dropdownOccupation.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+occupation+'")]').click()
    }

    async selectDropdownReligion(religion){
        await this.dropdownReligion.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+religion+'")]').click()
    }

    async enterTownOfBirth(town){
        await this.townOfBirth.click()
        await this.townOfBirth.fill(town)
    }

    async enterCountyOfBirth(county){
        await this.countyOfBirth.click()
        await this.countyOfBirth.fill(county)
    }
    
    async selectDropdownCountryOfBirth(country){
        await this.dropdownCountryOfBirth.click()
        await this.page.getByRole('option', { name: country }).click()
        //await this.page.locator('xpath=//div/ul/li[contains(text(),"'+country+'")]').click()
    }

    async selectDropdownNationality(nationality){
        await this.dropdownNationality.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+nationality+'")]').click()
    }

    async selectDropdownRegDisabled(regDisabled){
        await this.dropdownRegDisabled.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+regDisabled+'")]').click()
    }

    async selectdropdownPrimaryDisability(primaryDisability){
        await this.dropdownPrimaryDisablility.click()
        await this.page.getByRole('option', { name: primaryDisability }).click()
        //await this.page.locator('div').filter({ hasText: /^Add Details$/ }).locator('div').click()
        //await this.page.locator('xpath=//div/ul/li[contains(text(),"'+primaryDisability+'")]').click()
        //locator('#menu-primaryDisability').getByText('No')
    }

    async enterAssistanceNeeded(assistance){
        await this.assistanceNeeded.click()
        await this.assistanceNeeded.fill(assistance)
    }

    async enterDisabilityNote(disability){
        await this.disabilityNote.click()
        await this.disabilityNote.fill(disability)
    }

    async selectDropdownLanguage(language){
        await this.dropdownLanguage.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+language+'")]').click()
    }

    async selectDropdownInterpreterNeeded(interpreter){
        await this.dropdownInterpreterNeeded.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+interpreter+'")]').click()
    }

    async selectDropdownInterpreterType(interpreterType){
        await this.dropdownInterpreterType.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+interpreterType+'")]').click()
    }

    async enterHospitalRef(hospitalRef){
        await this.hospitalRef.click()
        await this.hospitalRef.fill(hospitalRef)
    }

    async enterPasId(pasId){
        await this.pasId.click()
        await this.pasId.fill(pasId)
    }

    async selectDropdownPatientType(patientType){
        await this.dropdownPatientType.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+patientType+'")]').click()
    }

    async selectDropdownPrisoner(prisoner){
        await this.dropdownPrisoner.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+prisoner+'")]').click()
    }

    async selectDropdownBloodType(bloodType){
        await this.dropdownBloodType.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+bloodType+'")]').click()
    }

    async selectDropdownRestrictedRegistration(restrictedRegistration){
        await this.dropdownRestrictedRegistration.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+restrictedRegistration+'")]').click()
    }

    async selectDropdownPatientWebAccess(webAccess){
        await this.dropdownPatientWebAccess.click()
        await this.page.locator('xpath=//div/ul/li[contains(text(),"'+webAccess+'")]').click()
    }

    async enterNotes(notes){
        await this.notes.click()
        await this.notes.fill(notes)
    }
}
module.exports = AddPatientDetailsPage