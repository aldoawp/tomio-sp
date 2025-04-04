"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useMediaQuery } from "@/hooks/use-media-query"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(defaultPreferences)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")

    if (!consent) {
      // If no consent is stored, show the banner after a short delay
      const timer = setTimeout(() => {
        setOpen(true)
      }, 1000)

      return () => clearTimeout(timer)
    } else {
      // If consent exists, load the saved preferences
      try {
        setCookiePreferences(JSON.parse(consent))
      } catch (e) {
        // If there's an error parsing, reset to defaults
        setCookiePreferences(defaultPreferences)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }

    setCookiePreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setOpen(false)

    // Here you would initialize the cookies/tracking based on preferences
    applyConsentPreferences(allAccepted)
  }

  const acceptNecessary = () => {
    setCookiePreferences(defaultPreferences)
    localStorage.setItem("cookie-consent", JSON.stringify(defaultPreferences))
    setOpen(false)

    // Here you would initialize only necessary cookies
    applyConsentPreferences(defaultPreferences)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(cookiePreferences))
    setOpen(false)
    setShowPreferences(false)

    // Apply the selected preferences
    applyConsentPreferences(cookiePreferences)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Cannot change necessary cookies

    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Function to apply consent preferences (in a real app, this would initialize various tracking services)
  const applyConsentPreferences = (preferences: CookiePreferences) => {
    console.log("Applying cookie preferences:", preferences)

    // Example implementation:
    if (preferences.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log("Analytics cookies enabled")
    }

    if (preferences.marketing) {
      // Initialize marketing cookies (e.g., Facebook Pixel)
      console.log("Marketing cookies enabled")
    }

    if (preferences.preferences) {
      // Initialize preference cookies
      console.log("Preference cookies enabled")
    }
  }

  // For mobile devices use a drawer, for desktop use a dialog
  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Cookie Settings</DialogTitle>
              <DialogDescription>
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies.
              </DialogDescription>
            </DialogHeader>

            {showPreferences ? (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div className="flex flex-col">
                      <Label htmlFor="necessary" className="font-medium">
                        Necessary Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <Switch id="necessary" checked disabled />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="flex flex-col">
                      <Label htmlFor="analytics" className="font-medium">
                        Analytics Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <Switch
                      id="analytics"
                      checked={cookiePreferences.analytics}
                      onCheckedChange={() => handlePreferenceChange("analytics")}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="flex flex-col">
                      <Label htmlFor="marketing" className="font-medium">
                        Marketing Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                    <Switch
                      id="marketing"
                      checked={cookiePreferences.marketing}
                      onCheckedChange={() => handlePreferenceChange("marketing")}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <div className="flex flex-col">
                      <Label htmlFor="preferences" className="font-medium">
                        Preference Cookies
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Allow the website to remember choices you make and provide enhanced features.
                      </p>
                    </div>
                    <Switch
                      id="preferences"
                      checked={cookiePreferences.preferences}
                      onCheckedChange={() => handlePreferenceChange("preferences")}
                    />
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowPreferences(false)}>
                    Back
                  </Button>
                  <Button onClick={savePreferences}>Save Preferences</Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <div className="text-sm">
                  <p>
                    For more information, please read our{" "}
                    <Link href="/cookies" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" onClick={acceptNecessary}>
                    Necessary Only
                  </Button>
                  <Button variant="outline" onClick={() => setShowPreferences(true)}>
                    Customize
                  </Button>
                  <Button onClick={acceptAll}>Accept All</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Cookie settings button in footer */}
        {!open && (
          <div className="fixed bottom-4 left-4 z-50">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="bg-background shadow-md">
              Cookie Settings
            </Button>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Cookie Settings</DrawerTitle>
            <DrawerDescription>
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic.
            </DrawerDescription>
          </DrawerHeader>

          {showPreferences ? (
            <>
              <div className="px-4 space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col">
                    <Label htmlFor="necessary-mobile" className="font-medium">
                      Necessary Cookies
                    </Label>
                    <p className="text-sm text-muted-foreground">Essential for the website to function properly.</p>
                  </div>
                  <Switch id="necessary-mobile" checked disabled />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col">
                    <Label htmlFor="analytics-mobile" className="font-medium">
                      Analytics Cookies
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <Switch
                    id="analytics-mobile"
                    checked={cookiePreferences.analytics}
                    onCheckedChange={() => handlePreferenceChange("analytics")}
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col">
                    <Label htmlFor="marketing-mobile" className="font-medium">
                      Marketing Cookies
                    </Label>
                    <p className="text-sm text-muted-foreground">Used to track visitors across websites.</p>
                  </div>
                  <Switch
                    id="marketing-mobile"
                    checked={cookiePreferences.marketing}
                    onCheckedChange={() => handlePreferenceChange("marketing")}
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col">
                    <Label htmlFor="preferences-mobile" className="font-medium">
                      Preference Cookies
                    </Label>
                    <p className="text-sm text-muted-foreground">Allow the website to remember choices you make.</p>
                  </div>
                  <Switch
                    id="preferences-mobile"
                    checked={cookiePreferences.preferences}
                    onCheckedChange={() => handlePreferenceChange("preferences")}
                  />
                </div>
              </div>

              <DrawerFooter className="flex-row justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowPreferences(false)}>
                  Back
                </Button>
                <Button onClick={savePreferences}>Save Preferences</Button>
              </DrawerFooter>
            </>
          ) : (
            <>
              <div className="px-4 text-sm">
                <p>
                  For more information, please read our{" "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <DrawerFooter>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <Button variant="outline" onClick={acceptNecessary}>
                    Necessary Only
                  </Button>
                  <Button onClick={acceptAll}>Accept All</Button>
                </div>
                <Button variant="outline" onClick={() => setShowPreferences(true)} className="w-full">
                  Customize
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/* Cookie settings button in footer for mobile */}
      {!open && (
        <div className="fixed bottom-4 left-4 z-50">
          <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="bg-background shadow-md">
            Cookie Settings
          </Button>
        </div>
      )}
    </>
  )
}

