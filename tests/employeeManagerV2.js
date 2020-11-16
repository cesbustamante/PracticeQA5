var employeeAssets = require('../testAssets/employeeAssets')
let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeePage()
        manager.navigate()
            .waitForElementPresent('body')
            .expect.element('@infoCard')
    },
    after: browser => {
        browser.end()
    },
    'Create a new employee': browser => {
        newEmployee(manager, employeedata[0])
    },
    'Edit an Existing Employee fields': browser => {
        editExistingEmployee(manager, employeedata[1])
    },
    //select the first, second and the last two employees from the list, 
    'Edit an Existing Employee fields': browser => {
        boundaryEmployeeList(manager, number)
    },

    'Check an ID positive number on employee card': browser => {
        CheckAnEmployee(manager, employeedata)
    },

    //serach employee by name and see if the search list match the criteria 
    'search Employee And Match': browser => {
        validSearch.forEach(test => {
            manager
            navigate()
                .click('@searchBox')
                .waitForElementVisible('@cardTitle')
                .setValue('@searchBox', [validSearchName.search, browser.Keys.ENTER])
                .expect.element('@list').text.to.equal(validSearchName.result).before(500)
        })






    }
}