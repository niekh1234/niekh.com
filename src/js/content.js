import axios from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// attaching to window to be accessible in index.html
window.retrieveContentful = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://cdn.contentful.com/spaces/1lkyrc2xzsor/environments/master/entries?access_token=jkSWIVy5G0yWVw1jz4ooNBjk9LWgDNVYQvcJu-IrCfw',
      )
      .then(async (res) => {
        let structuredOutput = [];

        // restructuring some data fields
        for (let item of res.data.items) {
          item.fields.date = capitalizeFirstLetter(
            new Date(item.fields.date).toLocaleDateString('nl-NL', {
              month: 'long',
              year: 'numeric',
            }),
          );

          item.fields.detailedInformationHow = richTextToHTML(item.fields.detailedInformationHow);
          item.fields.detailedInformationWhat = richTextToHTML(item.fields.detailedInformationWhat);
          // includes and fields are not ordered equally so need to find in array.
          item.fields.showcaseImage = findImageUrl(res.data.includes.Asset, item.fields.showcaseImage.sys.id).fields;

          structuredOutput.push(item.fields);
        }

        resolve(sortByDate(structuredOutput));
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// helper functions

function findImageUrl(includes, assetId) {
  return includes.find((asset) => asset.sys.id === assetId);
}

function sortByDate(items) {
  return items.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function richTextToHTML(document) {
  let parsed = documentToHtmlString(document);

  // replace non breaking space with regular space.
  return parsed.replaceAll(' ', ' ');
}
