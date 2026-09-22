/**
 * Create a scrape helper window without covering the user's work.
 *
 * Chrome still needs a real popup (inactive tabs get throttled; minimized
 * windows stall JS). focused:false alone is not enough on Windows — the new
 * window often lands on top of the z-order and the user must click their
 * work area to push it back. After create we immediately re-focus the
 * previously focused normal window so scrape behavior is unchanged but the
 * popup stays in the background.
 *
 * @param {chrome.windows.CreateData} createOptions
 * @returns {Promise<chrome.windows.Window>}
 */
export async function createUnfocusedScrapeWindow(createOptions = {}) {
    let restoreId = null;
    try {
        const last = await chrome.windows.getLastFocused({ populate: false });
        // Only restore normal browsing windows — never another scrape popup.
        if (last?.id != null && last.type === 'normal') {
            restoreId = last.id;
        }
    } catch {
        /* no focused window yet */
    }

    const win = await chrome.windows.create({
        ...createOptions,
        focused: false
    });

    if (win?.id != null) {
        try {
            await chrome.windows.update(win.id, { focused: false });
        } catch {
            /* ignore */
        }
    }

    if (restoreId != null && restoreId !== win?.id) {
        try {
            await chrome.windows.update(restoreId, { focused: true });
        } catch {
            /* window may have closed */
        }
    }

    return win;
}
