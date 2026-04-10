import{l as e}from"./iframe-DFAviyCv.js";import{t}from"./react-BXYgB72D.js";import{t as n}from"./jsx-runtime-BWaIa8Ji.js";import"./dist-Bby2ZGwZ.js";import{d as r,t as i}from"./theme-CkdUnjX9.js";import{n as a,t as o}from"./Box-DJk2pqJr.js";import{t as s}from"./Paper-BzeaEBAI.js";import{t as c}from"./ChipGroupAccordion-D3Cec8Kw.js";var l=e(t(),1),u=n(),d=r((0,u.jsx)(`path`,{d:`M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z`}),`Code`),f=({title:e,icon:t,children:n,variant:r=`filled`,accentColor:c=i.olive,filledTextColor:l=i.cream})=>(0,u.jsxs)(s,{elevation:0,sx:{p:{xs:3,md:4},borderRadius:`24px`,bgcolor:r===`filled`?c:`transparent`,color:r===`filled`?l:i.purple,border:r===`outlined`?`2px solid ${c}`:`none`,overflow:`hidden`,boxShadow:r===`filled`?`0 10px 40px ${c}33`:`none`,transition:`all 0.3s ease`},children:[(0,u.jsxs)(a,{variant:`h5`,sx:{fontWeight:800,mb:3,display:`flex`,alignItems:`center`,gap:1.5,fontSize:`1.25rem`,color:r===`outlined`?i.purple:l},children:[t,` `,e]}),(0,u.jsx)(o,{children:n})]});f.__docgenInfo={description:`A versatile wrapper component that groups related information.
It provides a consistent container style for skills, certifications, and academic data.`,methods:[],displayName:`CardContainer`,props:{title:{required:!0,tsType:{name:`string`},description:`The primary title for the section`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional decorative icon displayed next to the title`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Inner content of the card (e.g., skill groups or achievement tiles)`},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`}]},description:`Visual style: 'filled' (with solid background) or 'outlined' (border only)`,defaultValue:{value:`'filled'`,computed:!1}},accentColor:{required:!1,tsType:{name:`string`},description:`Primary brand color for background or border depending on the variant`,defaultValue:{value:`'#808034'`,computed:!1}},filledTextColor:{required:!1,tsType:{name:`string`},description:`Text color used exclusively when variant is 'filled'`,defaultValue:{value:`'#F3EFE0'`,computed:!1}}}};var p={title:`Organisms/CardContainer`,component:f,parameters:{layout:`padded`,backgrounds:{default:`light`}},tags:[`autodocs`],argTypes:{accentColor:{control:`color`},variant:{control:{type:`select`},options:[`filled`,`outlined`]}}},m={args:{title:`Technical Skills`,icon:l.createElement(d,{"data-testid":`card-icon`}),variant:`filled`,accentColor:i.olive,filledTextColor:i.cream,children:(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:(0,u.jsx)(c,{title:`Frontend`,items:[`React`,`Next.js`],accentColor:i.lavender})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Technical Skills',
    icon: React.createElement(CodeIcon, {
      ...({
        "data-testid": "card-icon"
      } as React.HTMLAttributes<HTMLOrSVGElement>)
    } as SvgIconProps),
    variant: 'filled',
    accentColor: colors.olive,
    filledTextColor: colors.cream,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <ChipGroupAccordion title="Frontend" items={['React', 'Next.js']} accentColor={colors.lavender} />
      </div>
  }
}`,...m.parameters?.docs?.source},description:{story:`Default view showing the organism with nested molecules.`,...m.parameters?.docs?.description}}};var h=[`Default`];export{m as Default,h as __namedExportsOrder,p as default};