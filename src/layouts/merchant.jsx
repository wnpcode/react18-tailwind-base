import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Merchant() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <div className={`"ml-36" p-4  transition-transform duration-300`}>
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "dark"
              ? "/img/svg/logo.svg"
              : "/img/svg/logo-dark.svg"
          }
          brandName="Al-Fatihah"
        />
        <div
          className={`p-4 ${
            openSidenav ? "ml-80" : "ml-36"
          }  transition-transform duration-300`}
        >
          <DashboardNavbar />
          <Configurator />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element, collapse, child }) =>
                  collapse === false ? (
                    <Route exact path={path} element={element} />
                  ) : (
                    child.map((elSub, index) => (
                      <Route
                        exact
                        path={elSub.subPath}
                        element={elSub.element}
                      />
                    ))
                  )
                )
            )}
          </Routes>
          {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
        </div>
      </div>
    </div>
  );
}

Merchant.displayName = "/src/layout/merchant.jsx";

export default Merchant;
