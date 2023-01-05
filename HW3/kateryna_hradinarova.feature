Feature: EPAM page testing 

  Scenario: main page is loading properly
    Given we have browser installed and stable internet connection
    When we go to "https://www.epam.com/"
    Then site is loaded without an error 

  Scenario: CAREERS button is working 
    Given we are at "https://www.epam.com/" and see the header with navigation in it
    When we press CAREERS button 
    Then the button redirect us to "https://www.epam.com/about/"

  Scenario: phonenumber at CONTACT US page is clickable 
    Given we are at "https://www.epam.com/about/who-we-are/contact/"
    When we click on the phonenumber
    Then browser popup window is shown and asks us to make a call on the following number

  Scenario: submitting on the Contact Us page is working properly
    Given we are at "https://www.epam.com/about/who-we-are/contact/"
    When we do not filled in any of the required fields
    Then the form is not sent and it asks us to filled in the fields properly

  Scenario: phonenumber validation on the Contact Us page is working
    Given we are at "https://www.epam.com/about/who-we-are/contact/"
    When we enter invalid phonenumber
    Then phonenumber validation error appears

  Scenario: email validation on the Contact Us page is working
    Given we are at "https://www.epam.com/about/who-we-are/contact/"
    When we enter invalid email
    Then email validation error appears

  Scenario: header is added to every page 
    Given we are at "https://www.epam.com/"
    When we scroll to the top of page 
    Then header is present 

  Scenario: search engine is working properly
    Given we are at "https://www.epam.com/"
    When we press SEARCH button and enter sth in the search field
    Then it loads every matching result to our entered sentence 