
const LinkedIn = {}
LinkedIn.id = 123456
LinkedIn.username = "ssandyy"
LinkedIn.isLoggedIn = false


console.log(LinkedIn); // { id: 123456, name: 'ssandyy', isLoggedIn: false }


//e.g for nested object decleartion and call
const LinkedInPremium = {
    id : 112233,
    username: "ssandyykr",
    isLoggedIn: false,
    company: {
        companyId: 789456,
        companyName: "Gaurs",
        manager: {
            managerName: "Sandeep",
        }
    }
}

console.log(LinkedInPremium.company.manager.managerName); // Sandeep
//for safe data fectch we can also use optional chaining (as sometime value or variable not available-->  '?' e.g below)
console.log(LinkedInPremium.company?.manager?.managerName);  // safe o/p-> Sandeep
console.log(LinkedInPremium.company.managerzz?.managerName); // undefined


//=============================================================================
