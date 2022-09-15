# Explore Countries
This is a react website about countries around the world

# How to use it
With Explore Countreis you get informations about countries around the world, for that purpose I used __[RestCountries](https://restcountries.com/)__ as the main source of my data.

## Home Page
In this page we have a search input, tha's wehere you can look for the country either by its name, capital city, currency, language, region or subregion. The result is a grid of cards, each one representing a country containing the flag and the official name of that country.

Below that we have another section called _Continent_, this section includes some buttons each one representing one continent, click one of them and then the result is shown below that which, similar to the search result, is a grid of cards...

## Explore Page
You are presented a search bar at the top of the page by which you can search for countries by their official names, bellow that there is a grid of cards, like the home page section, this one contains all the countries with no filters.

## Favourites Page
You sign in and then you are able to save some countries in Favourites sectino by clicking in the button _add to favourites_ in the Country page, all you favourite countries ares shown in this page.

## Country Page
Each country has a page that shows almost all the data provided by the API.

---	
# Technologies I used in this project

## [React Library](https://reactjs.org/)

## [React Router](https://reactrouter.com/)
I used React Router for routing between pages, this way you can jump from one page to another without the need to refresh the page, so the tab doesn't refresh at all.

## [React Icons](https://react-icons.github.io/react-icons)
React icons consists of many icon libraries including _font awsome_, _bootstrap_ and many more.

## [Tailwindcss](https://tailwindcss.com/)
I used this for the purpose of productivity, so instead of writing all the css youself, you can just add classes.

## [Material Tailwind](https://www.material-tailwind.com/)
This is built on top on the tailwindcss. It concains some ready-to-use components such as buttons that look like material ui.

## [React Select](https://react-select.com/)
React Select is used in the search of the explore page.

## [React Leaflet](https://react-leaflet.js.org/)
Each country has a map section, that's where Leaflet is used.

## [Formik & Yup](https://formik.org/)
Formik in collaboration with Yup work on form validation, I used them in sign up and sign in forms
