import{expect as e,userEvent as t,within as n}from"./dist-Bby2ZGwZ.js";import{t as r}from"./theme-CkdUnjX9.js";import{t as i}from"./ChipGroupAccordion-D3Cec8Kw.js";var a={title:`Molecules/ChipGroupAccordion`,component:i,tags:[`autodocs`],parameters:{layout:`centered`,backgrounds:{default:`light`}}},o={args:{title:`Static Stack`,items:[`React`,`TS`],accentColor:r.olive}},s={args:{title:`Hover Stack`,items:[`Visible on Hover`],accentColor:`#333333`},play:async({canvasElement:r})=>{let i=n(r),a=i.getByText(`Hover Stack`).closest(`div`),o=i.getByText(`Visible on Hover`);await e(o).not.toBeVisible(),a instanceof HTMLElement&&(await t.hover(a),await new Promise(e=>setTimeout(e,600)),await e(o).toBeVisible(),await t.unhover(a),await new Promise(e=>setTimeout(e,600)),await e(o).not.toBeVisible())}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Static Stack',
    items: ['React', 'TS'],
    accentColor: colors.olive
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hover Stack',
    items: ['Visible on Hover'],
    accentColor: '#333333'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText('Hover Stack');
    const container = title.closest('div');
    const chip = canvas.getByText('Visible on Hover');
    await expect(chip).not.toBeVisible();
    if (container instanceof HTMLElement) {
      await userEvent.hover(container);
      await new Promise(r => setTimeout(r, 600));
      await expect(chip).toBeVisible();
      await userEvent.unhover(container);
      await new Promise(r => setTimeout(r, 600));
      await expect(chip).not.toBeVisible();
    }
  }
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`Hover`];export{o as Default,s as Hover,c as __namedExportsOrder,a as default};