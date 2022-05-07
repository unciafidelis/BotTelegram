const TelegramBotService = require("../../lib/services/TelegramBotService");

describe("TelegramBot Class Unit tests", () => {
    test("1) calling undefined to set the test", () => {
        const token = "Not a token"
        expect(TelegramBotService.onText(token)).toBe(undefined)
    })
})