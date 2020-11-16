module.exports = "checkIDemployee"
var checkID = function(browser) {
    browser
        .getText('#employeeID', function(result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}