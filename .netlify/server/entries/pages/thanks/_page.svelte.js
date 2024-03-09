import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { e as email } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $email, $$unsubscribe_email;
  $$unsubscribe_email = subscribe(email, (value) => $email = value);
  $$unsubscribe_email();
  return `<div class="bg-white container flex mx-auto mt-32 h-[340px] w-[100%] xs:w-[340px] p-10 rounded-2xl xs:shadow-2xl flex-col"><label for="" data-svelte-h="svelte-1xa2uee"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" class="bg-gradient-to-r from-pink to-tomato rounded-full" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"></circle><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"></path></g></svg> <h1 class="font-sans-bold leading-none mt-4">Thanks for subscribing!</h1></label> <p class="my-4">A confimation email has been sent to <b class="line-clamp-1">${escape($email)}</b>Please open it and
		click the button inside to confirm your subscription</p> <a type="button" class="p-3 my-2 font-bold text-center bg-dark-grey rounded-md border-black border-opacity-80 border-solid h-[45px] w-[100%] xs:w-[260px] mt-[10rem] xs:mt-2 text-white transition duration-200 ease-in transform hover:bg-gradient-to-r from-pink to-tomato" value="Subscribe to monthly newsletter" href="/" data-svelte-h="svelte-dlplnr"><p>Dismiss this message</p></a></div>`;
});
export {
  Page as default
};
