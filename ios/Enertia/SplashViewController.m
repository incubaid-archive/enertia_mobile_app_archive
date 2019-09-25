//
//  SplashViewController.m
//  Enertia
//
//  Created by Admin on 27/07/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "SplashViewController.h"

@interface SplashViewController ()

@end

@implementation SplashViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  NSString *path=[[NSBundle mainBundle]pathForResource:@"loader_gif" ofType:@"gif"];
  NSURL *url=[[NSURL alloc] initFileURLWithPath:path];
  _imageVw.image= [UIImage animatedImageWithAnimatedGIFURL:url];
    // Do any additional setup after loading the view from its nib.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
