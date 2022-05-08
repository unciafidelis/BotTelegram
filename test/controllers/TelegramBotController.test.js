const TelegramBotController = require("../../lib/controllers/TelegramBotController")

describe("TelegramBotController unit test", () => {
    test("1) Testing getOnMsg as false", () => {
        const token = "Not a token"
        expect(TelegramBotController.getOnMsg(token)).toBe("Token not available")
    })
}) 