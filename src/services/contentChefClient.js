import ContentChefClient from '@contentchef/contentchef-node';

class ContentChef {
  client;
  targetDate;
  defaultChannel = 'example-ch';
  onlineChannel;

  constructor() {
    this.client = ContentChefClient({
      spaceId: 'mitchelbourne-b31e',
    }, this.targetDate);
    this.onlineChannel = this.client.onlineChannel('TFDPRW96E2D7ZC5BXVJ5', this.defaultChannel);
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchContents = async () => {
    try {
      return (await this.onlineChannel.search({
        skip: 0,
        take: 10,
        contentDefinition: 'top-site',
        sorting: '+onlineDate'
      })).data.items
    } catch (e) {
      console.log('an error occurred retrieving your contents');
      return Promise.resolve([])
    }
  }

  getContent = async (publicId) => {
    try {
      const result = await this.onlineChannel
        .content({
          publicId
        });
        console.log(result)
      return Promise.resolve(result.data);
    } catch (e) {
      console.log(`an error occurred retrieving your content ${publicId}`);
      return Promise.resolve(null);
    }
  }
}

export const contentChef = new ContentChef();