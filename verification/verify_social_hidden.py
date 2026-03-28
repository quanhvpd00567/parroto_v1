from playwright.sync_api import sync_playwright, expect
import sys

def test_social_hidden(page):
    try:
        # Check Register Page
        page.goto("http://localhost:5174/register")
        # Should NOT find Google text in a button
        google_btn = page.get_by_role("button", name="Google")
        expect(google_btn).not_to_be_visible()

        # Should NOT find "Or Email" text
        or_email = page.get_by_text("Or Email")
        expect(or_email).not_to_be_visible()

        page.screenshot(path="verification/register-hidden.png")

        # Check Login Page
        page.goto("http://localhost:5174/login")
        # Should NOT find Google text in a button
        google_btn_login = page.get_by_role("button", name="Google")
        expect(google_btn_login).not_to_be_visible()

        # Should NOT find "Or continue with" text
        or_continue = page.get_by_text("Or continue with")
        expect(or_continue).not_to_be_visible()

        page.screenshot(path="verification/login-hidden.png")
        print("Verification successful: Social auth buttons are hidden.")
    except Exception as e:
        print(f"Verification failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_social_hidden(page)
        finally:
            browser.close()
