import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@/test/test-utils";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
	beforeEach(() => {
		localStorage.clear();
		document.documentElement.classList.remove("dark");
	});

	it("opens the menu and applies the selected theme", async () => {
		const { user } = render(<ThemeToggle />);

		// The trigger is our Button, composed via Base UI's `render` prop.
		await user.click(screen.getByRole("button", { name: "Toggle theme" }));

		// Menu content is portalled; select the "Dark" radio item.
		await user.click(
			await screen.findByRole("menuitemradio", { name: "Dark" }),
		);

		expect(localStorage.getItem("theme")).toBe("dark");
		expect(document.documentElement).toHaveClass("dark");
	});
});
