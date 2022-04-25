declare namespace Home {
  interface Greet {
    data: {
      allDevJson: {
        nodes: [
          {
            name: string;
            titles: string[];
            homeCountry: string;
            toolsILove: string[];
            social: {
              gitHub: string;
              linkedIn: string;
            };
          }
        ];
      };
    };
  }
}
