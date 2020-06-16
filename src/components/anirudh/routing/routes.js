import React from "react";
import { Switch, Route } from "react-router-dom";


const NotFound = () => <div>Page not found</div>;

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Users, true)} />
        <Route path="/list-surveys" exact component={Auth(Surveys, true)} />
        <Route
          path="/surveyMessages/:userId"
          exact
          component={Auth(Messages, true)}
        />
        <Route path="/feedbacks" exact component={Auth(Feedback, true)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/paymentSetting" exact  component={Auth(Payment, true)} />
        <Route path="/transactions" exact  component={Auth(Transaction, true)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
