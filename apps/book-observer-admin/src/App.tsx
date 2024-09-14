import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { SerialList } from "./serial/SerialList";
import { SerialCreate } from "./serial/SerialCreate";
import { SerialEdit } from "./serial/SerialEdit";
import { SerialShow } from "./serial/SerialShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { ReadingStatusList } from "./readingStatus/ReadingStatusList";
import { ReadingStatusCreate } from "./readingStatus/ReadingStatusCreate";
import { ReadingStatusEdit } from "./readingStatus/ReadingStatusEdit";
import { ReadingStatusShow } from "./readingStatus/ReadingStatusShow";
import { TriggerWarningList } from "./triggerWarning/TriggerWarningList";
import { TriggerWarningCreate } from "./triggerWarning/TriggerWarningCreate";
import { TriggerWarningEdit } from "./triggerWarning/TriggerWarningEdit";
import { TriggerWarningShow } from "./triggerWarning/TriggerWarningShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BookObserver"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="Serial"
          list={SerialList}
          edit={SerialEdit}
          create={SerialCreate}
          show={SerialShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="ReadingStatus"
          list={ReadingStatusList}
          edit={ReadingStatusEdit}
          create={ReadingStatusCreate}
          show={ReadingStatusShow}
        />
        <Resource
          name="TriggerWarning"
          list={TriggerWarningList}
          edit={TriggerWarningEdit}
          create={TriggerWarningCreate}
          show={TriggerWarningShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
