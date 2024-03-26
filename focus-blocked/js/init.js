// it supports older versions of the apps
const locale = {
  en: {
    blocked_because_you_are_doing_your_morning_routine:
      "Blocked because you're doing your morning routine",
    blocked_because_you_are_doing_your_evening_routine:
      "Blocked because you're doing your evening routine",
    focus_block_inprogress_title: "Nice work",
    focus_block_inprogress_subtitle: (remainingTime, focusBlockCompleted) =>
      `you've been focused for ${remainingTime} ${
        focusBlockCompleted
          ? `and have already completed ${focusBlockCompleted} focus sessions.`
          : ""
      }`,
    focus_block_inprogress_additionalInfo: (remainingTime) =>
      `Just ${remainingTime} to go until the end of your focus session.`,
    focus_block_over_title: "Well done on finishing your focus session!",
    focus_block_over_subtitle: (focusBlockCompleted, totalFocusBlocked) =>
      `${
        focusBlockCompleted
          ? `You've completed ${focusBlockCompleted} focus sessions today for `
          : ""
      } ${
        totalFocusBlocked
          ? `a grand total of ${totalFocusBlocked} of focused time.`
          : ""
      }`,
    focus_block_over_additionalInfo:
      "Keep it up and you'll quickly make progress towards your long term goals.",
    this_site_is_always_blocked: "This site is always blocked",
    url_is_configured_to_be_always_blocked: (url) =>
      `${url} is configured to be always blocked. Click here for instructions on unblocking it.`,
    click_here_to_re_open_the_original_url: (url) =>
      `Click here to re-open the original URL ${url ?? ""}`,
    is_this_sub_reddit_actually_productive:
      "Is this sub-reddit actually productive? If so, you can add it to your Focus Mode's allow list but still block the rest of Reddit.",
    is_this_video_actually_productive:
      "Is this video actually productive? If so, you can add it to your Focus Mode's allow list but block the rest of Youtube.",
    focus_tip: (
      focus_mode,
      old_url
    ) => `<h6>Want to reprogram your brain so you stay on task during focus blocks?
      <a href="https://journals.sagepub.com/doi/abs/10.1177/1539449219876877?journalCode=otjb&">Research into breaking bad habits</a> indicates that if you take a positive action immediately after doing a bad habit, you'll start to disrupt the neural triggers for the bad habit. For example, you just opened ${old_url} when you were intending to focus${
      focus_mode ? ` on ${focus_mode}` : ``
    }. Try doing some deep breathing for 5 seconds, get up and stretch or go grab a glass of water. <a href="https://journals.sagepub.com/doi/full/10.1177/1539449219876877">Fritz et al's study</a> indicates this approach works much better than punishing yourself (no need to give yourself a mild electric shock for being so naughty). If you want a primer on the science of habit formation, <a href="https://hubermanlab.com/the-science-of-making-and-breaking-habits/">episode 53 of the Huberman Lab podcast</a> is worth a listen.</h6>`,
    privacy_notice: `We take your privacy seriously. Although we have blocked this website
    based on your instructions, we don't keep any record of your browsing
    history or which apps you use. The only things we track are: your
    habits, the focus modes you complete and other actions you take inside
    the Focus Bear app. Anything you do in other apps is confidential and
    we don't keep any records of it. Read more in
    <a href="https://www.focusbear.io/en/privacy-policy" target="_blank"
      >our privacy policy</a
    >`,
    privacy_button:
      "🙈 Privacy Alert: we don't track your browsing history. Learn More.",
    oops_i_actually_need_this: "Oops I actually need this - unblock it for me",
    every_focus_session_you_complete_is_taking_you_towards_long_term_goals:
      "Every focus session you complete is taking you towards your long term goals",
    are_you_sure: "Are you 100% sure?",
    yes_i_actually_need_it: "Yes I actually need it",
    you_re_right_get_this_site_away_from_me:
      "Err..you're right - get this site away from me!",
    click_here_to_edit_your_long_term_goals:
      "Click here to edit your long term goals",
  },
  es: {
    blocked_because_you_are_doing_your_morning_routine:
      "NEEDSTRANSLATION Blocked because you're doing your morning routine",
    blocked_because_you_are_doing_your_evening_routine:
      "NEEDSTRANSLATION Blocked because you're doing your evening routine",
    focus_block_inprogress_title: "NEEDSTRANSLATION Nice work",
    focus_block_inprogress_subtitle: (remainingTime, focusBlockCompleted) =>
      `NEEDSTRANSLATION you've been focused for ${remainingTime} ${
        focusBlockCompleted
          ? `NEEDSTRANSLATION and have already completed ${focusBlockCompleted} focus sessions.`
          : ""
      }`,
    focus_block_inprogress_additionalInfo: (remainingTime) =>
      `NEEDSTRANSLATION Just ${remainingTime} to go until the end of your focus session.`,
    focus_block_over_title:
      "NEEDSTRANSLATION Well done on finishing your focus session!",
    focus_block_over_subtitle: (focusBlockCompleted, totalFocusBlocked) =>
      `${
        focusBlockCompleted
          ? `NEEDSTRANSLATION You've completed ${focusBlockCompleted} focus sessions today for `
          : ""
      } ${
        totalFocusBlocked
          ? `NEEDSTRANSLATION a grand total of ${totalFocusBlocked} of focused time.`
          : ""
      }`,
    focus_block_over_additionalInfo:
      "NEEDSTRANSLATION Keep it up and you'll quickly make progress towards your long term goals.",
    this_site_is_always_blocked: "NEEDSTRANSLATION This site is always blocked",
    url_is_configured_to_be_always_blocked: (url) =>
      `NEEDSTRANSLATION ${url} is configured to be always blocked. Click here for instructions on unblocking it.`,
    click_here_to_re_open_the_original_url: (url) =>
      `NEEDSTRANSLATION Click here to re-open the original URL ${url ?? ""}`,
    is_this_sub_reddit_actually_productive:
      "NEEDSTRANSLATION Is this sub-reddit actually productive? If so, you can add it to your Focus Mode's allow list but still block the rest of Reddit.",
    is_this_video_actually_productive:
      "NEEDSTRANSLATION Is this video actually productive? If so, you can add it to your Focus Mode's allow list but block the rest of Youtube.",
    focus_tip: (
      focus_mode,
      old_url
    ) => `NEEDSTRANSLATION <h6>Want to reprogram your brain so you stay on task during focus blocks?
    <a href="https://journals.sagepub.com/doi/abs/10.1177/1539449219876877?journalCode=otjb&">Research into breaking bad habits</a> indicates that if you take a positive action immediately after doing a bad habit, you'll start to disrupt the neural triggers for the bad habit. For example, you just opened ${old_url} when you were intending to focus${
      focus_mode ? ` on ${focus_mode}` : ``
    }. Try doing some deep breathing for 5 seconds, get up and stretch or go grab a glass of water. <a href="https://journals.sagepub.com/doi/full/10.1177/1539449219876877">Fritz et al's study</a> indicates this approach works much better than punishing yourself (no need to give yourself a mild electric shock for being so naughty). If you want a primer on the science of habit formation, <a href="https://hubermanlab.com/the-science-of-making-and-breaking-habits/">episode 53 of the Huberman Lab podcast</a> is worth a listen.</h6>`,
    privacy_notice: `We take your privacy seriously. Although we have blocked this website
  based on your instructions, we don't keep any record of your browsing
  history or which apps you use. The only things we track are: your
  habits, the focus modes you complete and other actions you take inside
  the Focus Bear app. Anything you do in other apps is confidential and
  we don't keep any records of it. Read more in
  <a href="https://www.focusbear.io/en/privacy-policy" target="_blank"
    >our privacy policy</a
  >`,
    privacy_button:
      "NEEDSTRANSLATION 🙈 Privacy Alert: we don't track your browsing history. Learn More.",
    oops_i_actually_need_this:
      "NEEDSTRANSLATION Oops I actually need this - unblock it for me",
    every_focus_session_you_complete_is_taking_you_towards_long_term_goals:
      "NEEDSTRANSLATION Every focus session you complete is taking you towards your long term goals",
    are_you_sure: "NEEDSTRANSLATION Are you 100% sure?",
    yes_i_actually_need_it: "NEEDSTRANSLATION Yes I actually need it",
    you_re_right_get_this_site_away_from_me:
      "NEEDSTRANSLATION Err..you're right - get this site away from me!",
    click_here_to_edit_your_long_term_goals:
      "NEEDSTRANSLATION Click here to edit your long term goals",
  },
};

const urlParams = new URLSearchParams(window.location.search);
let current_url = urlParams.get("old_url");
current_url = current_url?.startsWith("http")
  ? current_url
  : `https://${current_url}`;
const old_url = current_url.substring(
  0,
  current_url.indexOf("?") === -1
    ? current_url.length
    : current_url.indexOf("?")
);
const domain = new URL(old_url).hostname;
const focus_mode = urlParams.get("focus_mode");
const block_type = urlParams.get("block_type");
const cuddlyBearMode = urlParams.get("cuddly_bear_mode");
const blocked_reason = urlParams.get("reason");
const encouraging_info = JSON.parse(urlParams.get("encouraging_info"));
const longTermGoals = encouraging_info?.long_term_goals ?? [];
const focusedTime = encouraging_info?.focused_time ?? 0;
const focusBlocksCompleted = urlParams.get("focusBlocksCompleted");
const totalFocusBlocksCompleted = urlParams.get("totalFocusBlocksCompleted");
const lang = urlParams?.get("lang") === LANGUAGE.ES ? LANGUAGE.ES : LANGUAGE.EN;
const selected_lang = locale[lang];

const focus_mode_end_time = moment(urlParams.get("focus_mode_end_time"));
const focus_blocked_message = getFocusTitle(block_type);
const isPageLoaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_LOADED));
const isPageReloaded = Boolean(Storage.getItem(LOCAL_STORAGE.IS_PAGE_RELOADED));
const isExternalHintRequired = Object.values(EXTERNAL_HINT_DOMAINS).includes(
  domain
);
let toast = document.getElementById("toast");
let cuddlyBearBtn = document.getElementById("cuddlyBearBtn");
let privacyBtn = document.getElementById("privacyBtn");
let unblockBtn = document.getElementById("popupUnblockBtn");
let goalsContainer = document.getElementById("goals");
let focusRemainingSeconds = 0;
let focusTitle = document.getElementById("focusTitle");
let focusSubtitle = document.getElementById("focusSubTitle");
let focusAdditionalInfo = document.getElementById("focusAdditionalInfo");
let focusProgressWrapper = document.getElementById("progressWrapper");
let focusBlockedUrl = document.getElementById("originalUrl");

//@Description: it supports for older versions of the app
if (!unblockBtn) {
  unblockBtn = document.getElementById("UnblockBtn");
}

document.getElementById("privacyNoticeContent").innerHTML =
  selected_lang.privacy_notice;
privacyBtn.textContent = selected_lang.privacy_button;
cuddlyBearBtn.textContent = selected_lang.oops_i_actually_need_this;
document.getElementById("longTermGoalsTitle").textContent =
  selected_lang.every_focus_session_you_complete_is_taking_you_towards_long_term_goals;
unblockBtn.textContent = selected_lang.yes_i_actually_need_it;
document.getElementsByClassName("popupClose").textContent =
  selected_lang.you_re_right_get_this_site_away_from_me;
