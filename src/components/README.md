# React Components

Components are pieces of User Interfaces, either functional or visual. Most User Interfaces can be broken down into smaller components which are easier to reason about and eaiser to change in isolation. Modern component based frameworks are heavily inspired by [Atomic Design Principles] which have you think about User Interfaces as composed of atoms which combines together to larger molecules to then be combined into organismes and so on to progressively larger and larger structures. React Components are a method to construct these pieces.

Exactly how small you go or how many or few components you have is entirely up to you, your applications and the design you are working on. Most used is to have a fundational component library providing the "Atoms", which you then compose into web pages or application Graphical User Interfaces.

To start off you can think of these as functions which might accept some parameters and based on these return the HTML that should be rendered. Later on you will see that these can also encapsulate UI behavior in more complex patterns.

See [Hooks](/src/hooks/) for the other major component in React applications.

## Simple Examples

### Smallest pieces

```tsx
// InputText.tsx
interface InputTextProperties {
  description: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

export function InputText({
  description,
  onChange,
  isValid,
}: InputTextProperties) {
  return (
    <div className={`input-text ${isValid ? "valid" : "invalid"}`}>
      <label>{description}</label>
      <input type="text" onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
```

```tsx
// SubmitButton.tsx
interface SubmitButtonProperties {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export function SubmitButton({
  onClick,
  disabled,
  children,
}: SubmitButtonProperties) {
  return (
    <div className="submit-button">
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
```

### Larger compositions

```tsx
// LoginForm.tsx
export function LoginForm() {
  const { isLoggedIn, setAlias, setPassword, logIn, isValid } =
    useAuthentication();

  return (
    <form>
      <div>
        <InputText
          description="Alias"
          onChange={setAlias}
          isValid={isValid.alias}
        />
        <InputText
          description="Password"
          onChange={setPassword}
          isValid={isValid.password}
        />
      </div>

      <div>
        {isLoggedIn ? (
          <a href="/authentication/log-out">Log Out</a>
        ) : (
          <SubmitButton onClick={logIn} disabled={!isValid.all}>
            Log In
          </SubmitButton>
        )}
        <a href="/authentication/register">Register</a>
      </div>
    </form>
  );
}
```

### Even Larger composition

```tsx
// LandingPage.tsx
export function LandingPage() {
  return (
    <main>
      <HeroSection />
      <SignUpSection />
      <ReferralsSection />
    </main>
  );
}
```

```tsx
// SiteLayout.tsx
interface SiteLayoutProperties {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProperties) {
  return (
    <div>
      <NotificationBanner />

      <header>
        <Logo />

        <SiteNavigation />

        <AuthenticationStatus />
      </header>

      <div>
        {/* <Outlet /> is a component where page content is inserted */}
        <Outlet />
      </div>

      <footer>
        <LegalNotes />
        <SocialLinks />
      </footer>
    </div>
  );
}
```

```tsx
// Site.tsx
export function Site() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="documentation" element={<DocumentationPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="authentication" element={<AuthenticationPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
```

## References

- [Atomic Design Principles]: A design strategy, where solutions are composed of smaller components, from Atoms to Organisms and beyond.

[Atomic Design Principles]: https://atomicdesign.bradfrost.com/chapter-2/
