declare namespace About {
  interface Me {
    data: {
      allDevJson: {
        nodes: [
          {
            name: string;
            photos: string[];
          }
        ];
      };
    };
  }
}
