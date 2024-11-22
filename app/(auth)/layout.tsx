const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="w-full min-h-screen flex-center bg-primary-50 bg-dotted-pattern bg-cover bg-center bg-fixed">
         {children}
      </div>
   )
}

export default Layout