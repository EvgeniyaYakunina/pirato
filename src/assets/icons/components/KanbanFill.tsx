import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKanbanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#kanban-fill_svg__a)"><path fill="#000" d="M10 3.5v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-6A.5.5 0 0 1 7 3h2.5a.5.5 0 0 1 .5.5m4-.5h-2.5a.5.5 0 0 0-.5.5v3.25a.25.25 0 0 0 .25.25h3a.25.25 0 0 0 .25-.25V3.5A.5.5 0 0 0 14 3m.25 5h-3a.25.25 0 0 0-.25.25V11a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V8.25a.25.25 0 0 0-.25-.25M5 3H2.5a.5.5 0 0 0-.5.5v3.25a.25.25 0 0 0 .25.25h3a.25.25 0 0 0 .25-.25V3.5A.5.5 0 0 0 5 3m.25 5h-3a.25.25 0 0 0-.25.25V13a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V8.25A.25.25 0 0 0 5.25 8" /></g><defs><clipPath id="kanban-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKanbanFill);
const Memo = memo(ForwardRef);
export default Memo;