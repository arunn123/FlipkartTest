package runnerTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(tags = {"@Flipkart"}, format = {"pretty","html: report"}, monochrome=true,  glue= {"testcases"},features="src\\test\\resources\\feature")

public class RunnerTest {
	

}