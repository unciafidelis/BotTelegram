const TelegramBotService = require("../../lib/services/TelegramBotService");

describe("TelegramBot Class Unit tests", () => {
    test("1) calling undefined to set the test", () => {
        expect(TelegramBotService.onText()).toBe(undefined)
    })
})