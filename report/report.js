$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("flipkart.feature");
formatter.feature({
  "line": 2,
  "name": "Flipkart home page",
  "description": "",
  "id": "flipkart-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Flipkart"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Flipkart moblile order validation test",
  "description": "",
  "id": "flipkart-home-page;flipkart-moblile-order-validation-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open flipkart browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "escape key is pressed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "flipkart home page should be loaded and validated",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user searches mobile in search bar and hit enter",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "list of given mobile phones should appear",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks first searched result link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "searched mobile should appear with details",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "mobile details should be captured for validation",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "delivery details is entered and item added to cart",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "mobile details should be validated and compared with previous data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "screen is closed if the mobile details matches",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkart.open_flipkart_browser_and_validate_it()"
});
formatter.result({
  "duration": 12222939500,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.escape_key_is_pressed()"
});
formatter.result({
  "duration": 440580600,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.flipkart_home_page_should_be_loaded_and_validated()"
});
formatter.result({
  "duration": 247121600,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.user_searches_mobile_in_search_bar_and_hit_enter()"
});
formatter.result({
  "duration": 776904200,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.list_of_given_mobile_phones_should_appear()"
});
formatter.result({
  "duration": 2683109200,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.user_clicks_first_searched_result_link()"
});
formatter.result({
  "duration": 264388500,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.searched_mobile_should_appear_with_textprice_details()"
});
formatter.result({
  "duration": 1768800,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.mobile_textprice_should_be_captured_for_validation()"
});
formatter.result({
  "duration": 5657506100,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.delivery_details_is_entered_and_item_added_to_cart()"
});
formatter.result({
  "duration": 602401200,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.mobile_textprice_should_be_validated_and_compared_with_previous_data()"
});
formatter.result({
  "duration": 1474628100,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.screen_is_closed_if_the_textprice_matches()"
});
formatter.result({
  "duration": 186158000,
  "status": "passed"
});
});