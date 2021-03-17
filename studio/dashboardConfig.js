export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60522021882017075d214535',
                  title: 'Sanity Studio',
                  name: 'hanumweb-2-studio',
                  apiId: '2418bace-a627-4e38-9168-687047340999'
                },
                {
                  buildHookId: '60522021cae192aba4c39d5a',
                  title: 'Portfolio Website',
                  name: 'hanumweb-2',
                  apiId: '5aa163cd-5f9e-4389-aea3-716a842988a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johanneshovda/hanumweb2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://hanumweb-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
