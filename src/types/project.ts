import { TemplateResult } from "lit"
import { TagProject } from "./tagProject"

export type Project = {
    iframe: TemplateResult,
    title: string,
    description: string,
    tags: TagProject[],
    sourceDemo: string,
    sourceGit: string
}