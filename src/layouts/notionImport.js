/* ================================================================================

	database-update-send-email.

  Glitch example: https://glitch.com/edit/#!/notion-database-email-update
  Find the official Notion API client @ https://github.com/makenotion/notion-sdk-js/

================================================================================ */

const { Client } = require("@notionhq/client")
const dotenv = require("dotenv")

dotenv.config()
const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID


/**
 * Gets page info from the database.
 *
 * @returns {Promise<Array<{ pageId: string, title: string, departmentName: string, departmentColor: string, progressBar: string, featuredImage: string }>>}
 */
async function getPagesFromNotionDatabase() {
  const pages = []
  let cursor = undefined

  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    })
    pages.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  console.log(`${pages.length} pages successfully fetched.`)

  return pages.map(page => {
    const departmentProperty = page.properties["Department"]
    const progressBarProperty = page.properties["Progress Bar"]
    const featuredImageProperty = page.properties["Featured Image"]

    const title = page.properties["Name"].title
        .map(({ plain_text }) => plain_text)
        .join("")
    const departmentName = departmentProperty ? departmentProperty.select.name : "No Name"
    const departmentColor = departmentProperty ? departmentProperty.select.color : "No Color"
    const progressBar = progressBarProperty ? progressBarProperty.select.string : "No Progress Bar"
    const featuredImage = featuredImageProperty ? featuredImageProperty.select.url : "No Featured Image"

    let layoutName;
    if (featuredImage !== "")
      layoutName = "featuredImage";
    else
      layoutName = "project";

    return {
      pageId: page.id,
      title,
      departmentName,
      departmentColor,
      progressBar,
      featuredImage,
      layoutName,
    }
  })
}

/*
async function findAndFixCoverlessPages() {
  // Get the tasks currently in the database.
  console.log("\nFetching tasks from Notion DB...")
  const currentTasks = await getPagesFromNotionDatabase()

  // Return any tasks that have had their properties updated.
  const coverlessPages = findCoverlessPages(currentTasks)
  console.log(`Found ${coverlessPages.length} coverless pages.`)

  // For each coverless page, update taskPageIdToPropertyMap and send an email notification.
  for (const task of coverlessPages) {
    pageIdToPropertiesMap[task.pageId] = {task.title, task.departmentName, task.departmentColor, task.progressBar, task.featuredImage}
  }
}
 */


/**
 *  Returns any pages with no cover image

function findCoverlessPages(currentTasks) {
  return currentTasks.filter(currentTask => {
    return currentTask.featuredImage === ""
  })
}
 */
