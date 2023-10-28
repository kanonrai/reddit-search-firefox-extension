const MENU_ITEM_ID = 'searchRedditItem';
const MENU_ITEM_TITLE = 'Search reddit.com';

browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
        id: MENU_ITEM_ID,
        title: MENU_ITEM_TITLE,
        contexts: ["selection"],
    });
    browser.contextMenus.onClicked.addListener((info) => {
        if (info.menuItemId !== MENU_ITEM_ID) return;
        if (!info.selectionText.trim()) return;

        browser.search.search({
            disposition: 'NEW_TAB',
            query: `site:reddit.com ${info.selectionText.trim()}`,
        });
    })
})