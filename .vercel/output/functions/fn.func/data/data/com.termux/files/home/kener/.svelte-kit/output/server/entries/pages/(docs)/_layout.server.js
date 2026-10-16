import fs from "fs-extra";
import path from "path";
import { marked } from "marked";
import { v as version } from "../../../chunks/version.js";
function extractMetadataAndContent(fileContent) {
  const metadataRegex = /^---\s*([\s\S]+?)\s*---\s*/;
  const match = fileContent.match(metadataRegex);
  const result = {
    metadata: {},
    content: fileContent
    // Default to entire content if no metadata is found
  };
  if (match) {
    const metadataLines = match[1].split("\n").filter((line) => line.trim() !== "");
    result.content = fileContent.slice(match[0].length).trim();
    metadataLines.forEach((line) => {
      const [key, value] = line.split(":").map((part) => part.trim());
      if (key && value) {
        result.metadata[key.toLowerCase()] = value;
      }
    });
  }
  return result;
}
async function load({ params, route, url, cookies, request }) {
  const docFile = params.doc;
  const docFolderPath = path.resolve("docs");
  let docFilePath = docFolderPath + "/home.md";
  if (docFile) {
    docFilePath = docFolderPath + `/${docFile}.md`;
  }
  const fileContents = await fs.readFileSync(docFilePath, "utf-8");
  const siteStructure = await fs.readFileSync(docFolderPath + "/structure.json", "utf-8");
  const { metadata, content } = extractMetadataAndContent(fileContents);
  docFilePath.replace(docFolderPath, "");
  const siteStructureJSON = JSON.parse(siteStructure);
  return {
    md: marked.parse(content),
    title: metadata.title || "Kener Docs",
    description: metadata.description || "Kener Docs",
    siteStructure: siteStructureJSON,
    kenerVersion: version()
  };
}
export {
  load
};
