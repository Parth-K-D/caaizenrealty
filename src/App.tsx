import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LogoLoader from "./components/LogoLoader";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import ProjectsView from "./components/ProjectsView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("home");

  return (
    <>
      {/* Initial High-End Custom Logo Loader Sequence */}
      <AnimatePresence>
        {showLoader && (
          <LogoLoader onComplete={() => setShowLoader(false)} />
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!showLoader && (
        <div id="caaizen-application" className="min-h-screen bg-[#111310] flex flex-col justify-between font-sans">
          
          {/* Global Header Nav Integration */}
          <Header
            currentTab={activeTab}
            setTab={(tab) => setActiveTab(tab)}
          />

          {/* Active View Container wrapped in elegant transitions */}
          <main className="flex-grow pt-[72px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                {activeTab === "home" && (
                  <HomeView
                    onSetTab={(tab) => setActiveTab(tab)}
                  />
                )}
                
                {activeTab === "projects" && (
                  <ProjectsView onSetTab={(tab) => setActiveTab(tab)} />
                )}
                
                {activeTab === "about" && (
                  <AboutView
                    onSetTab={(tab) => setActiveTab(tab)}
                  />
                )}
                
                {activeTab === "contact" && (
                  <ContactView />
                )}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>
      )}
    </>
  );
}

