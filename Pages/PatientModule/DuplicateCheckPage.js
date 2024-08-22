class DuplicateCheckPage {
    constructor(page) {
        this.page = page
        this.identifier = page.getByTestId('Identifier') //input[@data-testid="Identifier"]
        this.dropdownUniqueIdentification = page.getByTestId('uniqueIdentification').getByLabel('Open')
        //dropdown option select : //li[contains(text(), "Aadhar Card")] alternative getByRole('option', { name: 'Aadhar Card' })
        this.uniqueIdentificationId = page.getByTestId('Unique Identification ID') //input[@id="Unique Identification ID"]
        this.dropdownPhotoIdentification = page.getByTestId('photoIdentification').getByLabel('Open')
        this.photoIdentificationId = page.getByTestId('Photo Identification ID') 
        this.middleName = page.getByTestId('Middle Name(s)') //input[@id="Middle Name(s)"]
        this.dropdownBabyBornInHospital = page.getByTestId('Is baby born in this hospital?').getByLabel('', { exact: true })
        //dropdown option getByRole('option', { name: 'Yes' })
        this.duplicateCheckButton = page.getByTestId('Duplicate Check') //button[@data-testid="Duplicate Check"]
        this.createPatientButton = page.getByTestId('Create Patient') //button[@data-testid="Create Patient"]
    }

    async enterIdentifier(test){
        await this.identifier.click()
        await this.identifier.fill(test)
    }

    async selectUniqueIdentification(uniqueIdType) {
        await this.dropdownUniqueIdentification.click()
        await this.page.getByRole('option', { name: uniqueIdType }).click()
    }

    async enterUniqueIdentificationId(uniqueId){
        await this.uniqueIdentificationId.click()
        await this.uniqueIdentificationId.fill(uniqueId)
    }

    async selectPhotoIdentification(photoIdType){
        await this.dropdownPhotoIdentification.click()
        await this.page.getByRole('option', { name: photoIdType }).click()
    }

    async enterPhotoIdentificationId(photoId){
        await this.photoIdentificationId.click()
        await this.photoIdentificationId.fill(photoId)
    }

    async enterMiddleName(middleName){
        await this.middleName.click()
        await this.middleName.fill(middleName)
    }

    async selectBabyBornInHospital(answer){
        await this.dropdownBabyBornInHospital.click()
        await this.page.getByRole('option', { name: answer }).click()
    }
}
module.exports = DuplicateCheckPage