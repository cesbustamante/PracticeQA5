var checkIDemployee = require('../testAssets/employeeAssets')
var employeedata = [{
        name: 'Jager Dali',
        phone: '3033050247',
        email: 'jagerdali@dali.com',
        title: 'Artist',
    },
    {
        name: 'Salvatore Carlos',
        phone: '3033050257',
        email: 'carlossalvatore@dali.com',
        title: 'Architect',

    }
]
var number = [{
        first: 1,
        second: 2,
        antepenultimate: 138,
        last: 139,
    },

]
var validSearchName = [{
        search: 'Dollie Berry',
        esult: 'Dollie Berry',
    },
    {
        search: 'Ruby Estrada',
        esult: 'Ruby Estrada',
    },
    {
        search: 'Britta Perry',
        esult: 'Britta Perry',
    }
]
let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeePage()
        manager.navigate()
            .waitForElementPresent('body')
            .pause(3000)

    },
    after: browser => {
        browser.end()

    },
    'Edit an Existing Employee fields': browser => {
        manager
            .editExistingEmployee(employeedata[0].name, employeedata[0].phone, employeedata[0].email, employeedata[0].title)
    },
    //select the first, second and the last two employees from the list, 
    // 'Edit an Existing Employee fields': browser => {
    //     manager
    //         .boundaryEmployeeList(number)
    // },

    'check if cancel and save button are disabled when not change made': browser => {
        manager
            .cancelSaveButtonsDisable(employeedata)
    },

    'Check an ID positive number on employee card': browser => {
        manager
            .CheckAnEmployee(employeedata), checkIDemployee

    },

    'Create a new employee': browser => {
        manager
            .newEmployee(employeedata[0])
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