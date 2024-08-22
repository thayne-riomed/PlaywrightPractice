class AddAddress {
    constructor(page) {
        this.page=page
        this.dropdownDefaultAddressType = page.getByLabel('Please Select')
        this.numAndRoad = page.locator('#numberRoadPermanentAddress')
        this.town = page.locator('#townPermanentAddress')
        this.district = page.locator('#districtPermanentAddress')
        this.county = page.locator('#countyPermanentAddress')
        this.postcode = page.locator('#postCodePermanentAddress')
        this.findPostcodeButton = page.getByTestId('Find Postcode').first()
        this.postcodeSearch = page.getByTestId('postcodeSearch')
        this.dropdownCountry = page.locator('#mui-component-select-country')
        this.isoCountryCode = page.locator('#iSOCountryCodePermanentAddress') //auto populated
        this.icaoCountryCode = page.locator('#iCAOCountryCodePermanentAddress') //auto populated
        this.phone = page.locator('#phonePermanentAddress')
        this.email = page.locator('#emailPermanentAddress')
        this.mobile = page.locator('#permanentMobileNumber')
        this.workPhone = page.locator('#workPhonePermanentAddress')
        this.fax = page.locator('#faxPermanentAddress')
        this.dropdownHealthRegion = page.locator('#mui-component-select-healthRegion')
        this.dropdownLocationZone = page.locator('#mui-component-select-locationZone')
        this.addViewNotesButton = page.getByTestId('Add/View Notes').first()
        this.notes = page.getByTestId('Notes')
        this.popupSaveButton = page.getByTestId('CommonCellmaPopup').getByTestId('Save')
        this.popupCloseNotesPopup = page.getByLabel('cancelIcon')
        this.saveButton = page.getByTestId('Save')
    }

    async selectDropdownDefaultAddressType(type) {
        await this.dropdownDefaultAddressType.click()
        await this.page.getByRole('option', { name: type }).click() //'Asked, but not given' //Not Asked
    }

    async enterNumAndRoad(numAndRoad){
        await this.numAndRoad.click()
        await this.numAndRoad.fill(numAndRoad)
    }

    async enterTown(town){
        await this.town.click()
        await this.town.fill(town)        
    }

    async enterDistrict(district){
        await this.district.click()
        await this.district.fill(district)        
    }

    async enterCounty(county){
        await this.county.click()
        await this.county.fill(county)        
    }

    async enterPostcode(postcode){
        await this.postcode.click()
        await this.postcode.fill(postcode)        
    }

    async enterPostcodeSearch(){
        await this.postcodeSearch.click()
        await this.postcodeSearch.fill("123")
        await this.page.getByRole('option', { name: 'William Street, New York, NY, USA' })
    }

    async selectDropdownCountry(country){
        await this.dropdownCountry.click()
        await this.page.getByRole('option', { name: country, exact: 'true' })        
    }

    async enterPhone(phone){
        await this.phone.click()
        await this.phone.fill(phone)        
    }

    async enterEmail(email){
        await this.email.click()
        await this.email.fill(email)        
    }

    async enterMobile(mobile){
        await this.mobile.click()
        await this.mobile.fill(mobile)        
    }

    async enterWorkPhone(workPhone){
        await this.workPhone.click()
        await this.workPhone.fill(workPhone)        
    }

    async enterFax(fax){
        await this.fax.click()
        await this.fax.fill(fax)        
    }

    async selectDropdownHealthRegion(healthRegion){
        await this.dropdownHealthRegion.click()
        await this.page.getByRole('option', { name: healthRegion, exact: 'true' })    
    }

    async selectDropdownLocationZone(locationZone){
        await this.dropdownLocationZone.click()
        await this.page.getByRole('option', { name: locationZone, exact: 'true' })    
    }

    async enterNotes(notes){
        await this.notes.click()
        await this.notes.fill(notes)        
    }
}
module.exports = AddAddress