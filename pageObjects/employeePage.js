var employeeCommands = {
    newEmployee: function(name, phone, email, title) {
        this
            .click('@addNewEmployee')
            .click('@newEmployee')
            .waitForElementVisible('@cardTitle')
            .clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@phoneField')
            .setValue('@phoneField', phone)
            .clearValue('@emailField')
            .setValue('@emailField', email)
            .clearValue('@titleField')
            .setValue('@titleField', title)
            .click('@saveButton')
            .expect.element('@cardTitle').text.equal(name)
            //
            .verify.valueContains('@phoneField', phone)
            .verify.valueContains('@emailField', emeail)
            .verify.valueContains('@titleField', title)
        return this

    },
    editExistingEmployee: function(name, phone, email, title) {
        this
            .click('@employeePosition30')
            .waitForElementVisible('@cardTitle')
            .clearValue('@nameField')
            .setValue('@nameField', name)
            .clearValue('@phoneField')
            .setValue('@phoneField', phone)
            .clearValue('@emailField')
            .setValue('@emailField', email)
            .clearValue('@titleField')
            .setValue('@titleField', title)
            .click('@saveButton')
            .expect.element('@cardTitle').text.equal(name)
            .verify.valueContains('@phoneField', phone)
            .verify.valueContains('@emailField', emeail)
            .verify.valueContains('@titleField', title)
        return this

    },
    //select the first, second and the last two employees from the list, 
    // boundaryEmployeeList: function(number) {
    //     this

    //         .useXpath()
    //         .click(`(//li[@class="listText"])[${number.first}]`)
    //         .useCss()
    //         .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.first)
    //         //
    //         .useXpath()
    //         .click(`(//li[@class="listText"])[${number.second}]`)
    //         .useCss()
    //         .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.second)
    //         //
    //         .useXpath()
    //         .click(`(//li[@class="listText"])[${number.antepenultimate}]`)
    //         .useCss()
    //         .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.antepenultimate)
    //         //
    //         .useXpath()
    //         .click(`(//li[@class="listText"])[${number.second}]`)
    //         .useCss()
    //         .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.last)
    //     return this
    // },
    cancelButton: function(employeedata) {
        this

            .click('@employeePosition7')
            .waitForElementVisible('@cardTitle')
            .clearValue('@phoneField')
            .setValue('@phoneField', employeedata.phone)
            .click('@cancelButton')
            .expect.element('@phoneField').text.to.not.equal(employeedata.phone)
        return this
    },
    CheckAnEmployee: function(employeedata) {
        this

            .click('@employeePosition30')
            .expect.element('@cardTitle').text.to.equal(employeedata.name).before(500)
        checkID(manager)
        return this

    },

    cancelSaveButtonsDisable: function(employeedata) {
        this
            .click('@employeePosition7')
            .clearValue('@nameField')
            .setValue('@nameField', employeedata.name)
            .expect.element('@saveButton').to.be.disabled
            .expect.element('@cancelButton').to.be.disabled
        return this

    }

}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommands],
    elements: {
        versionNumber: 'footer',
        addNewEmployee: 'li[name="addEmployee"]',
        //employee seleetors 
        newEmployee: 'li[name="New Employee"]',
        employeePosition1: {
            selector: '(//li[@class="listText"])[1]',
            locateStrategy: 'xpath'
        },
        employeePosition7: {
            selector: '(//li[@class="listText"])[7]',
            locateStrategy: 'xpath'
        },
        employeePosition30: {
            selector: '(//li[@class="listText"])[30]',
            locateStrategy: 'xpath'
        },
        employeePosition138: {
            selector: '(//li[@class="listText"])[138]',
            locateStrategy: 'xpath'
        },
        //employee card selectors
        cardTitle: '#employeeTitle',
        infoCard: '.infoCard',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        emailField: 'input[name="emailEntry"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        cancelButton: 'button[name="cancel"]',
        deleteButtun: 'button[name="delete"]',
        //serach bar selectors
        searchBox: 'input[name="searchBox"]',
        clearBox: 'button[name="clearSearch"]',
        list: '.listContainer'




    }
}