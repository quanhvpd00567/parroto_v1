from playwright.sync_api import sync_playwright, expect

def verify_notes_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Set viewport for desktop
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # Bypass authentication by setting a mock token if possible,
        # but here we'll just try to access the page directly since we've
        # seen the agent test it by bypassing ProtectedRoute.
        # Actually, let's just use the URL.
        try:
            page.goto('http://localhost:5174/my-notes', timeout=10000)

            # Wait for the heading to ensure page loaded
            expect(page.get_by_role('heading', name='My Notes')).to_be_visible(timeout=10000)

            # Take screenshot of the whole page
            page.screenshot(path='verification/my-notes-verification.png', full_page=True)
            print("Screenshot saved to verification/my-notes-verification.png")

        except Exception as e:
            print(f"Error: {e}")
            # Take a screenshot even on error to see what's happening
            page.screenshot(path='verification/error.png')
        finally:
            browser.close()

if __name__ == "__main__":
    verify_notes_page()
