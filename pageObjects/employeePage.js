var checkID = function(browser) {
    browser
        .getText('#employeeID', function(result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}
var employeeCommands = {
    newEmployee: (manager, employeedata) => {
        this
        manager
            .click('@addNewEmployee')
            .click('@newEmployee')
            .waitForElementVisible('@cardTitle')
            .clearValue('@nameField')
            .setValue('@nameField', employeedata.name)
            .clearValue('@phoneField')
            .setValue('@phoneField', employeedata.phone)
            .clearValue('@emailField')
            .setValue('@emailField', employeedata.email)
            .clearValue('@titleField')
            .setValue('@titleField', employeedata.title)
            .click('@saveButton')
            .expect.element('@cardTitle').text.equal(employeedata.name)
        manager
            .verify.valueContains('@phoneField', employeedata.phone)
            .verify.valueContains('@emailField', employeedata.emeail)
            .verify.valueContains('@titleField', employeedata.title)
        return this

    },
    editExistingEmployee: (manager, employeedata) => {
        this
        manager
            .click('@employeePosition30')
            .waitForElementVisible('@cardTitle')
            .clearValue('@nameField')
            .setValue('@nameField', employeedata.name)
            .clearValue('@phoneField')
            .setValue('@phoneField', employeedata.phone)
            .clearValue('@emailField')
            .setValue('@emailField', employeedata.email)
            .clearValue('@titleField')
            .setValue('@titleField', employeedata.title)
            .click('@saveButton')
            .expect.element('@cardTitle').text.equal(employeedata.name)
        manager
            .verify.valueContains('@phoneField', employeedata.phone)
            .verify.valueContains('@emailField', employeedata.emeail)
            .verify.valueContains('@titleField', employeedata.title)
        return this

    },
    //select the first, second and the last two employees from the list, 
    boundaryEmployeeList: (manager, number) => {
        manager
            .useXpath()
            .click(`(//li[@class="listText"])[${number.first}]`)
            .useCss()
            .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.first)
        manager
            .useXpath()
            .click(`(//li[@class="listText"])[${number.second}]`)
            .useCss()
            .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.second)
        manager
            .useXpath()
            .click(`(//li[@class="listText"])[${number.antepenultimate}]`)
            .useCss()
            .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.antepenultimate)
        manager
            .useXpath()
            .click(`(//li[@class="listText"])[${number.second}]`)
            .useCss()
            .expect.elements('//li[@class="listText"])[${number}]').count.to.equal(number.last)
    },
    cancelButton: (manager, employeedata) => {
        manager
            .click('@employeePosition7')
            .waitForElementVisible('@cardTitle')
            .clearValue('@phoneField')
            .setValue('@phoneField', employeedata.phone)
            .click('@cancelButton')
            .expect.element('@phoneField').text.to.not.equal(employeedata.phone)
    },
    CheckAnEmployee: (manager, employeedata) => {
        manager
            .click('@employeePosition30')
            .expect.element('@cardTitle').text.to.equal(employeedata.name).before(500)
        checkID(manager)

    },

    cancelSaveButtonsDisable: (manager, ) => {
        manager
            .click('@employeePosition7')
            .clearValue('@nameField')
            .setValue('@nameField', employeedata.name)
            .expect.element('@saveButton').to.be.disabled
            .expect.element('@cancelButton').to.be.disabled

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
        emailField: 'input[name="emailLabel"]',
        titleField: 'input[name="titleEntry"]',
        saveButton: '#saveBtn',
        cancelButton: 'button[name="cancel"]',
        deleteButtun: 'button[name="delete"]',
        //serach bar selectors
        searchBox: 'input[name="searchBox"]',
        clearBox: '',
        list: '.listContainer'




    }
}